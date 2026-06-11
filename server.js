const express = require("express");
const path = require("path");
const fs = require("fs");
const os = require("os");
const { execSync } = require("child_process");
const crypto = require("crypto");

const app = express();
app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.join(__dirname, "public")));

const RUST_TESTS_DIR = path.join(__dirname, "rust-tests"); // fallback for local dev
const embeddedTests = (() => { try { return require("./tests-embedded"); } catch { return {}; } })();

const exercises = [
  // Group 1 - Difficulty 2 - 7600 XP
  { name: "min_and_max", group: 1, difficulty: 2, xp: 7600, fileType: "lib", edition: "2021", testFile: "main.rs" },
  { name: "count_factorial_steps", group: 1, difficulty: 2, xp: 7600, fileType: "lib", edition: "2024", testFile: "lib.rs" },
  { name: "matrix_multiplication", group: 1, difficulty: 2, xp: 7600, fileType: "lib", edition: "2024", testFile: "main.rs" },
  // Group 2 - Difficulty 4 - 15200 XP
  { name: "reverse_it", group: 2, difficulty: 4, xp: 15200, fileType: "lib", edition: "2024", testFile: "lib.rs" },
  { name: "smallest", group: 2, difficulty: 4, xp: 15200, fileType: "lib", edition: "2024", testFile: "lib.rs" },
  { name: "modify_letter", group: 2, difficulty: 4, xp: 15200, fileType: "lib", edition: "2024", testFile: "lib.rs" },
  { name: "counting_words", group: 2, difficulty: 4, xp: 15200, fileType: "lib", edition: "2024", testFile: "lib.rs" },
  // Group 3 - Difficulty 6 - 22800 XP
  { name: "partial_sums", group: 3, difficulty: 6, xp: 22800, fileType: "lib", edition: "2024", testFile: "lib.rs" },
  { name: "inv_pyramid", group: 3, difficulty: 6, xp: 22800, fileType: "lib", edition: "2024", testFile: "lib.rs" },
  { name: "previousprime", group: 3, difficulty: 6, xp: 22800, fileType: "lib", edition: "2024", testFile: "lib.rs" },
  { name: "nextprime", group: 3, difficulty: 6, xp: 22800, fileType: "lib", edition: "2024", testFile: "lib.rs" },
  { name: "profanity_filter", group: 3, difficulty: 6, xp: 22800, fileType: "lib", edition: "2024", testFile: "lib.rs" },
  { name: "prime_checker", group: 3, difficulty: 6, xp: 22800, fileType: "lib", edition: "2024", testFile: "lib.rs" },
  // Group 4 - Difficulty 8 - 30400 XP
  { name: "scytale_decoder", group: 4, difficulty: 8, xp: 30400, fileType: "lib", edition: "2024", testFile: "lib.rs" },
  { name: "insertion_sort", group: 4, difficulty: 8, xp: 30400, fileType: "lib", edition: "2024", testFile: "lib.rs" },
  { name: "rpn", group: 4, difficulty: 8, xp: 30400, fileType: "bin", edition: "2024", testFile: "lib.rs" },
  { name: "rot21", group: 4, difficulty: 8, xp: 30400, fileType: "lib", edition: "2024", testFile: "lib.rs" },
  { name: "order_books", group: 4, difficulty: 8, xp: 30400, fileType: "lib", edition: "2024", testFile: "lib.rs" },
  { name: "matrix_determinant", group: 4, difficulty: 8, xp: 30400, fileType: "lib", edition: "2024", testFile: "lib.rs" },
  // Group 5 - Difficulty 10 - 38000 XP
  { name: "office_worker", group: 5, difficulty: 10, xp: 38000, fileType: "lib", edition: "2024", testFile: "lib.rs" },
  { name: "blood_types_s", group: 5, difficulty: 10, xp: 38000, fileType: "lib", edition: "2024", testFile: "lib.rs" },
  // Group 6 - Difficulty 12 - 45600 XP
  { name: "matrix_display", group: 6, difficulty: 12, xp: 45600, fileType: "lib", edition: "2024", testFile: "lib.rs" },
  { name: "queens", group: 6, difficulty: 12, xp: 45600, fileType: "lib", edition: "2024", testFile: "lib.rs" },
  { name: "lunch_queue", group: 6, difficulty: 12, xp: 45600, fileType: "lib", edition: "2021", testFile: "lib.rs" },
  // Group 7 - Difficulty 14 - 53200 XP
  { name: "drop_the_blog", group: 7, difficulty: 14, xp: 53200, fileType: "lib", edition: "2024", testFile: "lib.rs" },
  { name: "filter_table", group: 7, difficulty: 14, xp: 53200, fileType: "lib", edition: "2024", testFile: "lib.rs" },
  { name: "display_table", group: 7, difficulty: 14, xp: 53200, fileType: "lib", edition: "2024", testFile: "lib.rs" },
  // Group 8 - Difficulty 16 - 60800 XP
  { name: "flat_tree", group: 8, difficulty: 16, xp: 60800, fileType: "lib", edition: "2024", testFile: "lib.rs" },
  // Group 9 - Difficulty 18 - 68400 XP
  { name: "brackets_matching", group: 9, difficulty: 18, xp: 68400, fileType: "bin", edition: "2024", testFile: "lib.rs", testDeps: 'rand = "0.9.2"' },
  { name: "brain_fuck", group: 9, difficulty: 18, xp: 68400, fileType: "bin", edition: "2024", testFile: "lib.rs" },
];

function loadTestCode() {
  for (const ex of exercises) {
    // Prefer embedded test code (works in Docker / deployment)
    if (embeddedTests[ex.name]) {
      ex.testCode = embeddedTests[ex.name];
      continue;
    }
    // Fall back to reading from local rust-tests directory
    const testDir = path.join(RUST_TESTS_DIR, "tests", `${ex.name}_test`);
    const testSrcFile = ex.testFile === "main.rs" ? "main.rs" : "lib.rs";
    const testPath = path.join(testDir, "src", testSrcFile);
    try {
      ex.testCode = fs.readFileSync(testPath, "utf-8");
    } catch {
      console.warn(`Warning: Could not read test for ${ex.name} at ${testPath}`);
      ex.testCode = "";
    }
  }
}

loadTestCode();

app.get("/api/exercises", (req, res) => {
  res.json(
    exercises.map((e) => ({
      name: e.name,
      group: e.group,
      difficulty: e.difficulty,
      xp: e.xp,
      fileType: e.fileType,
    }))
  );
});

app.post("/api/test", async (req, res) => {
  const { exercise: exName, code } = req.body;
  if (!exName || !code) return res.status(400).json({ error: "Missing exercise or code" });

  const ex = exercises.find((e) => e.name === exName);
  if (!ex) return res.status(404).json({ error: "Exercise not found" });
  if (!ex.testCode) return res.status(500).json({ error: "Test code not loaded" });

  const tmpId = crypto.randomUUID();
  const tmpDir = path.join(os.tmpdir(), "rust-checkpoint", tmpId);

  try {
    const solDir = path.join(tmpDir, "solutions", ex.name, "src");
    const testDir = path.join(tmpDir, "tests", `${ex.name}_test`, "src");
    fs.mkdirSync(solDir, { recursive: true });
    fs.mkdirSync(testDir, { recursive: true });

    const srcFile = ex.fileType === "bin" ? "main.rs" : "lib.rs";
    fs.writeFileSync(path.join(solDir, srcFile), code);

    const solCargo = `[package]\nname = "${ex.name}"\nversion = "0.1.0"\nedition = "${ex.edition}"\n\n[dependencies]\n`;
    fs.writeFileSync(path.join(tmpDir, "solutions", ex.name, "Cargo.toml"), solCargo);

    let testCargo;
    if (ex.fileType === "lib") {
      testCargo = `[package]\nname = "${ex.name}_test"\nversion = "0.1.0"\nedition = "${ex.edition}"\n\n[dependencies]\n${ex.name} = { path = "../../solutions/${ex.name}" }\n`;
    } else {
      testCargo = `[package]\nname = "${ex.name}_test"\nversion = "0.1.0"\nedition = "${ex.edition}"\n\n[dependencies]\n`;
      if (ex.testDeps) testCargo += `${ex.testDeps}\n`;
    }
    fs.writeFileSync(path.join(tmpDir, "tests", `${ex.name}_test`, "Cargo.toml"), testCargo);

    const testSrcFile = ex.testFile === "main.rs" ? "main.rs" : "lib.rs";
    fs.writeFileSync(path.join(testDir, testSrcFile), ex.testCode);

    const testManifest = path.join(tmpDir, "tests", `${ex.name}_test`, "Cargo.toml");
    const cmd = `cargo test --manifest-path "${testManifest}" 2>&1`;

    // On Linux/Docker ensure cargo is on PATH; on Windows it's already there
    const extraPath = process.platform === "win32"
      ? ""
      : "/usr/local/cargo/bin:/usr/local/rustup/bin:";
    const env = {
      ...process.env,
      PATH: extraPath + (process.env.PATH || ""),
    };
    if (process.platform !== "win32") {
      env.CARGO_TARGET_DIR = process.env.CARGO_TARGET_DIR || "/cargo-target";
      env.CARGO_HOME = process.env.CARGO_HOME || "/usr/local/cargo";
      env.RUSTUP_HOME = process.env.RUSTUP_HOME || "/usr/local/rustup";
    }

    let output;
    try {
      output = execSync(cmd, { timeout: 120000, encoding: "utf-8", maxBuffer: 4 * 1024 * 1024, env });
    } catch (err) {
      output = (err.stdout || "") + (err.stderr || "") || err.message;
    }

    const passed = parseTestResults(output);

    res.json({ output, ...passed });
  } catch (err) {
    res.status(500).json({ error: err.message, output: err.message });
  } finally {
    try {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    } catch {}
  }
});

function parseTestResults(output) {
  const resultLine = output.match(/test result: (\w+)\. (\d+) passed; (\d+) failed;/);
  if (resultLine) {
    return {
      status: resultLine[1] === "ok" ? "pass" : "fail",
      passed: parseInt(resultLine[2]),
      failed: parseInt(resultLine[3]),
      total: parseInt(resultLine[2]) + parseInt(resultLine[3]),
    };
  }
  if (output.includes("error[E") || output.includes("error:")) {
    return { status: "compile_error", passed: 0, failed: 0, total: 0 };
  }
  return { status: "unknown", passed: 0, failed: 0, total: 0 };
}

// Proxy subject READMEs from GitHub
const subjectCache = {};
app.get("/api/subject/:name", async (req, res) => {
  const name = req.params.name;
  if (subjectCache[name]) return res.json({ content: subjectCache[name] });

  const slugs = [
    name.replace(/_/g, "-"),
    name,
    name.replace(/_/g, "-").toLowerCase(),
  ];

  for (const slug of slugs) {
    for (const base of [
      `https://raw.githubusercontent.com/01-edu/public/master/subjects/${slug}/README.md`,
      `https://raw.githubusercontent.com/01-edu/public/master/subjects/${slug}/`,
    ]) {
      try {
        const url = base.endsWith("/") ? base + "README.md" : base;
        const resp = await fetch(url);
        if (resp.ok) {
          const text = await resp.text();
          subjectCache[name] = text;
          return res.json({ content: text });
        }
      } catch {}
    }
  }

  res.json({ content: null });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Rust Checkpoint Tester running at http://localhost:${PORT}`);
  console.log(`Loaded ${exercises.filter((e) => e.testCode).length}/${exercises.length} exercises`);
});
