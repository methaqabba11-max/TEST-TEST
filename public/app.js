/* ── Starter templates ── */
const T = {};
T.min_and_max = 'pub fn min_and_max(nb_1: i32, nb_2: i32, nb_3: i32) -> (i32, i32) {\n    todo!()\n}\n';
T.count_factorial_steps = 'pub fn count_factorial_steps(factorial: u64) -> u64 {\n    todo!()\n}\n';
T.matrix_multiplication = '#[derive(Debug, PartialEq, Eq)]\npub struct Matrix(pub (i32, i32), pub (i32, i32));\n\npub fn multiply(m: Matrix, val: i32) -> Matrix {\n    todo!()\n}\n';
T.reverse_it = 'pub fn reverse_it(nbr: i32) -> String {\n    todo!()\n}\n';
T.smallest = 'use std::collections::HashMap;\n\npub fn smallest(h: HashMap<&str, i32>) -> i32 {\n    todo!()\n}\n';
T.modify_letter = 'pub fn remove_letter_sensitive(s: &str, letter: char) -> String {\n    todo!()\n}\n\npub fn remove_letter_insensitive(s: &str, letter: char) -> String {\n    todo!()\n}\n\npub fn swap_letter_case(s: &str, letter: char) -> String {\n    todo!()\n}\n';
T.counting_words = 'use std::collections::HashMap;\n\npub fn counting_words(words: &str) -> HashMap<String, u32> {\n    todo!()\n}\n';
T.partial_sums = 'pub fn parts_sums(arr: &[u64]) -> Vec<u64> {\n    todo!()\n}\n';
T.inv_pyramid = 'pub fn inv_pyramid(st: String, max: usize) -> Vec<String> {\n    todo!()\n}\n';
T.previousprime = 'pub fn prev_prime(nbr: usize) -> usize {\n    todo!()\n}\n';
T.nextprime = 'pub fn next_prime(nbr: usize) -> usize {\n    todo!()\n}\n';
T.profanity_filter = 'pub fn check_ms(message: &str) -> Result<&str, &str> {\n    todo!()\n}\n';
T.prime_checker = '#[derive(PartialEq, Eq, Debug)]\npub enum PrimeErr {\n    Even,\n    Divider(usize),\n}\n\npub fn prime_checker(n: usize) -> Option<Result<usize, PrimeErr>> {\n    todo!()\n}\n';
T.scytale_decoder = 'pub fn scytale_decoder(s: String, letters_per_turn: usize) -> Option<String> {\n    todo!()\n}\n';
T.insertion_sort = 'pub fn insertion_sort(slice: &mut [i32], steps: usize) {\n    todo!()\n}\n';
T.rpn = 'fn main() {\n    // Read args: std::env::args()\n    // Implement RPN calculator: + - * / %\n    // Print "Error" on invalid input\n    todo!()\n}\n';
T.rot21 = 'pub fn rot21(input: &str) -> String {\n    todo!()\n}\n';
T.order_books = 'pub mod library {\n    pub mod writers {\n        use super::books::*;\n\n        pub struct Writer {\n            pub first_name: String,\n            pub last_name: String,\n            pub books: Vec<Book>,\n        }\n    }\n\n    pub mod books {\n        pub struct Book {\n            pub title: String,\n            pub year: u32,\n        }\n    }\n}\n\nuse library::writers::Writer;\n\npub fn order_books(writer: &mut Writer) {\n    todo!()\n}\n';
T.matrix_determinant = 'pub fn matrix_determinant(matrix: [[isize; 3]; 3]) -> isize {\n    todo!()\n}\n';
T.office_worker = '#[derive(Debug, PartialEq, Eq)]\npub struct OfficeWorker {\n    pub name: String,\n    pub age: u32,\n    pub role: WorkerRole,\n}\n\n#[derive(Debug, PartialEq, Eq)]\npub enum WorkerRole {\n    Admin,\n    User,\n    Guest,\n}\n\nimpl From<&str> for OfficeWorker {\n    fn from(s: &str) -> Self {\n        todo!()\n    }\n}\n\nimpl From<&str> for WorkerRole {\n    fn from(s: &str) -> Self {\n        todo!()\n    }\n}\n';
T.blood_types_s = '#[derive(Debug, PartialEq, Eq, Hash, Clone, Copy)]\npub enum Antigen {\n    A,\n    AB,\n    B,\n    O,\n}\n\n#[derive(Debug, PartialEq, Eq, Hash, Clone, Copy)]\npub enum RhFactor {\n    Positive,\n    Negative,\n}\n\n#[derive(Debug, PartialEq, Eq, Hash, Clone, Copy)]\npub struct BloodType {\n    pub rh_factor: RhFactor,\n    pub antigen: Antigen,\n}\n\nimpl BloodType {\n    pub fn can_receive_from(self, other: Self) -> bool {\n        todo!()\n    }\n\n    pub fn donors(self) -> Vec<Self> {\n        todo!()\n    }\n\n    pub fn recipients(self) -> Vec<Self> {\n        todo!()\n    }\n}\n';
T.matrix_display = 'use std::fmt;\n\n#[derive(Debug, Clone)]\npub struct Matrix(pub Vec<Vec<i32>>);\n\nimpl Matrix {\n    pub fn new(slice: &[&[i32]]) -> Self {\n        todo!()\n    }\n}\n\nimpl fmt::Display for Matrix {\n    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {\n        todo!()\n    }\n}\n';
T.queens = '#[derive(Debug, Clone, Copy)]\npub struct ChessPosition {\n    pub rank: usize,\n    pub file: usize,\n}\n\nimpl ChessPosition {\n    pub fn new(rank: usize, file: usize) -> Option<Self> {\n        todo!()\n    }\n}\n\n#[derive(Debug, Clone, Copy)]\npub struct Queen {\n    pub position: ChessPosition,\n}\n\nimpl Queen {\n    pub fn new(position: ChessPosition) -> Self {\n        todo!()\n    }\n\n    pub fn can_attack(self, other: Self) -> bool {\n        todo!()\n    }\n}\n';
T.lunch_queue = '#[derive(Debug, Clone, Default)]\npub struct Queue {\n    pub node: Link,\n}\n\npub type Link = Option<Box<Person>>;\n\n#[derive(Debug, Clone)]\npub struct Person {\n    pub name: String,\n    pub discount: u32,\n    pub next_person: Link,\n}\n\nimpl Queue {\n    pub fn new() -> Queue {\n        todo!()\n    }\n\n    pub fn add(&mut self, name: String, discount: u32) {\n        todo!()\n    }\n\n    pub fn invert_queue(&mut self) {\n        todo!()\n    }\n\n    pub fn rm(&mut self) -> Option<(String, u32)> {\n        todo!()\n    }\n\n    pub fn search(&self, s: &str) -> Option<(&String, &u32)> {\n        todo!()\n    }\n}\n';
T.drop_the_blog = 'use std::cell::{Cell, RefCell};\n\n#[derive(Debug, Default, Clone, Eq, PartialEq)]\npub struct Blog {\n    pub drops: Cell<usize>,\n    pub states: RefCell<Vec<bool>>,\n}\n\nimpl Blog {\n    pub fn new() -> Self {\n        todo!()\n    }\n\n    pub fn new_article(&self, body: String) -> (usize, Article<\'_>) {\n        todo!()\n    }\n\n    pub fn is_dropped(&self, id: usize) -> bool {\n        todo!()\n    }\n}\n\n#[derive(Debug, Clone, Eq, PartialEq)]\npub struct Article<\'a> {\n    id: usize,\n    body: String,\n    parent: &\'a Blog,\n}\n\nimpl<\'a> Article<\'a> {\n    pub fn discard(self) {}\n}\n\nimpl Drop for Article<\'_> {\n    fn drop(&mut self) {\n        todo!()\n    }\n}\n';
T.filter_table = '#[derive(Clone, Debug, PartialEq, Default)]\npub struct Table {\n    pub headers: Vec<String>,\n    pub body: Vec<Vec<String>>,\n}\n\nimpl Table {\n    pub fn new() -> Self {\n        todo!()\n    }\n\n    pub fn add_row(&mut self, row: &[String]) {\n        todo!()\n    }\n\n    pub fn filter_col(&self, filter: impl Fn(&str) -> bool) -> Option<Self> {\n        todo!()\n    }\n\n    pub fn filter_row(&self, col_name: &str, filter: impl Fn(&str) -> bool) -> Option<Self> {\n        todo!()\n    }\n}\n';
T.display_table = 'use std::fmt;\n\n#[derive(Clone, Debug, PartialEq, Default)]\npub struct Table {\n    pub headers: Vec<String>,\n    pub body: Vec<Vec<String>>,\n}\n\nimpl fmt::Display for Table {\n    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {\n        todo!()\n    }\n}\n\nimpl Table {\n    pub fn new() -> Self {\n        todo!()\n    }\n\n    pub fn add_row(&mut self, row: &[String]) {\n        todo!()\n    }\n}\n';
T.flat_tree = 'use std::collections::BTreeSet;\n\npub fn flatten_tree<T: ToOwned<Owned = T>>(tree: &BTreeSet<T>) -> Vec<T> {\n    todo!()\n}\n';
T.brackets_matching = 'use std::env;\n\nfn main() {\n    // For each CLI arg, check if brackets () [] {} are matched\n    // Print "OK" or "Error" per arg\n    todo!()\n}\n';
T.brain_fuck = 'fn main() {\n    // Read first CLI argument\n    // Implement brainfuck interpreter\n    // Commands: > < + - . [ ]\n    // Ignore all other characters\n    todo!()\n}\n';

/* ── State ── */
let exercises = [];
let current = null;
let editor = null;
let saved = JSON.parse(localStorage.getItem("rc-code") || "{}");
let passed = new Set(JSON.parse(localStorage.getItem("rc-pass") || "[]"));
let subjectCache = {};
let subjectVisible = true;
let sidebarVisible = true;

/* ── Init ── */
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const r = await fetch("/api/exercises");
    exercises = await r.json();
  } catch (e) {
    console.error("Failed to load exercises:", e);
    exercises = [];
  }

  editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    mode: "rust",
    theme: "material-darker",
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    tabSize: 4,
    indentWithTabs: false,
    extraKeys: {
      "Ctrl-Enter": runTests,
      "Cmd-Enter": runTests,
      "Ctrl-/": "toggleComment",
      "Cmd-/": "toggleComment",
      Tab: cm => cm.execCommand("indentMore"),
      "Shift-Tab": cm => cm.execCommand("indentLess"),
    },
  });

  editor.on("change", () => {
    if (!current) return;
    saved[current.name] = editor.getValue();
    localStorage.setItem("rc-code", JSON.stringify(saved));
  });

  document.getElementById("btnRun").addEventListener("click", runTests);
  document.getElementById("btnReset").addEventListener("click", resetCode);
  document.getElementById("btnCloseSubject").addEventListener("click", () => setSubjectVisible(false));
  document.getElementById("btnOpenSubject").addEventListener("click", () => setSubjectVisible(true));
  document.getElementById("btnCloseSidebar").addEventListener("click", () => setSidebarVisible(false));
  document.getElementById("btnOpenSidebar").addEventListener("click", () => setSidebarVisible(true));

  initResizer();
  initHResizer();
  buildSidebar();
  updateProgress();
  if (exercises.length) selectExercise(exercises[0]);
});

/* ── Subject panel toggle ── */
function setSubjectVisible(show) {
  subjectVisible = show;
  const panel = document.getElementById("subjectPanel");
  const openBtn = document.getElementById("btnOpenSubject");
  if (show) { panel.classList.remove("hidden"); openBtn.style.display = "none"; }
  else { panel.classList.add("hidden"); openBtn.style.display = "flex"; }
  setTimeout(() => editor.refresh(), 300);
}

/* ── Sidebar toggle ── */
function setSidebarVisible(show) {
  sidebarVisible = show;
  const sidebar = document.getElementById("sidebar");
  const openBtn = document.getElementById("btnOpenSidebar");
  if (show) { sidebar.classList.remove("hidden"); openBtn.style.display = "none"; }
  else { sidebar.classList.add("hidden"); openBtn.style.display = "flex"; }
  setTimeout(() => editor.refresh(), 300);
}

/* ── Resizer for subject panel width ── */
function initResizer() {
  const resizer = document.getElementById("resizer");
  const panel = document.getElementById("subjectPanel");
  let startX, startW;

  resizer.addEventListener("mousedown", (e) => {
    startX = e.clientX;
    startW = panel.offsetWidth;
    resizer.classList.add("active");
    document.body.classList.add("no-select");

    const onMove = (e2) => {
      const newW = Math.max(180, Math.min(600, startW + (e2.clientX - startX)));
      panel.style.width = newW + "px";
    };
    const onUp = () => {
      resizer.classList.remove("active");
      document.body.classList.remove("no-select");
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
      editor.refresh();
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  });
}

/* ── Vertical resizer for output panel height ── */
function initHResizer() {
  const resizer = document.getElementById("hResizer");
  const output = document.querySelector(".output-area");
  let startY, startH;

  resizer.addEventListener("mousedown", (e) => {
    startY = e.clientY;
    startH = output.offsetHeight;
    resizer.classList.add("active");
    document.body.classList.add("no-select");

    const onMove = (e2) => {
      const newH = Math.max(80, Math.min(600, startH - (e2.clientY - startY)));
      output.style.height = newH + "px";
    };
    const onUp = () => {
      resizer.classList.remove("active");
      document.body.classList.remove("no-select");
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
      editor.refresh();
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  });
}

/* ── Sidebar ── */
function buildSidebar() {
  const nav = document.getElementById("exerciseNav");
  nav.innerHTML = "";
  const groups = {};
  exercises.forEach(ex => {
    (groups[ex.group] = groups[ex.group] || []).push(ex);
  });

  Object.entries(groups).forEach(([g, exs]) => {
    const h = document.createElement("div");
    h.className = "group-head";
    h.textContent = "Level " + g + "  •  Difficulty " + exs[0].difficulty;
    nav.appendChild(h);

    exs.forEach(ex => {
      const el = document.createElement("div");
      el.className = "ex-item";
      el.dataset.name = ex.name;
      el.innerHTML =
        '<div class="ex-dot' + (passed.has(ex.name) ? " pass" : "") + '"></div>' +
        '<span class="ex-label">' + ex.name + '</span>' +
        '<span class="ex-xp">' + (ex.xp / 1000).toFixed(1) + 'k</span>';
      el.addEventListener("click", () => selectExercise(ex));
      nav.appendChild(el);
    });
  });
}

/* ── Select exercise ── */
async function selectExercise(ex) {
  current = ex;

  document.querySelectorAll(".ex-item").forEach(el => {
    el.classList.toggle("active", el.dataset.name === ex.name);
  });

  document.getElementById("exTitle").textContent = ex.name;
  document.getElementById("exTags").innerHTML =
    '<span class="tag g">Level ' + ex.group + '</span>' +
    '<span class="tag d">Diff ' + ex.difficulty + '</span>' +
    '<span class="tag x">' + ex.xp.toLocaleString() + ' XP</span>';

  document.getElementById("fileLabel").textContent = ex.fileType === "bin" ? "main.rs" : "lib.rs";

  const code = saved[ex.name] || T[ex.name] || "// Write your code here\n";
  editor.setValue(code);
  setTimeout(() => editor.refresh(), 10);

  document.getElementById("btnRun").disabled = false;
  document.getElementById("btnReset").disabled = false;

  const pill = document.getElementById("statusPill");
  if (passed.has(ex.name)) {
    pill.textContent = "PASSED";
    pill.className = "status-pill pass";
  } else {
    pill.textContent = "";
    pill.className = "status-pill";
  }

  document.getElementById("outputBody").innerHTML = 'Click "Run Tests" or press Ctrl+Enter to test your code.';
  document.getElementById("resultPills").innerHTML = "";

  loadSubject(ex.name);
}

/* ── Subject loading ── */
async function loadSubject(name) {
  const body = document.getElementById("subjectBody");
  body.innerHTML = '<p class="muted">Loading subject...</p>';

  if (subjectCache[name]) {
    renderMarkdown(body, subjectCache[name]);
    return;
  }

  try {
    const r = await fetch("/api/subject/" + encodeURIComponent(name));
    const data = await r.json();
    if (data.content) {
      subjectCache[name] = data.content;
      renderMarkdown(body, data.content);
    } else {
      body.innerHTML = '<p class="muted">Subject not found. Check the ' +
        '<a href="https://github.com/01-edu/public/tree/master/subjects/' +
        name.replace(/_/g, "-") + '" target="_blank">GitHub page</a>.</p>';
    }
  } catch {
    body.innerHTML = '<p class="muted">Could not load subject.</p>';
  }
}

function renderMarkdown(el, md) {
  if (typeof marked !== "undefined" && marked.parse) {
    el.innerHTML = marked.parse(md);
  } else {
    el.textContent = md;
  }
}

/* ── Reset ── */
function resetCode() {
  if (!current) return;
  const t = T[current.name] || "";
  editor.setValue(t);
  saved[current.name] = t;
  localStorage.setItem("rc-code", JSON.stringify(saved));
}

/* ── Run tests ── */
async function runTests() {
  if (!current) return;
  const btn = document.getElementById("btnRun");
  const out = document.getElementById("outputBody");
  const pills = document.getElementById("resultPills");

  btn.classList.add("loading");
  btn.disabled = true;
  out.innerHTML = "Compiling and running tests...";
  pills.innerHTML = "";

  try {
    const r = await fetch("/api/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ exercise: current.name, code: editor.getValue() }),
    });
    const data = await r.json();
    showOutput(data);

    if (data.status === "pass") {
      passed.add(current.name);
      setDot(current.name, "pass");
    } else {
      passed.delete(current.name);
      setDot(current.name, data.status === "fail" ? "fail" : "");
    }
    localStorage.setItem("rc-pass", JSON.stringify([...passed]));
    updateProgress();
    updatePill(data.status);
  } catch (e) {
    out.innerHTML = '<span class="err">Network error: ' + esc(e.message) + '</span>';
  } finally {
    btn.classList.remove("loading");
    btn.disabled = false;
  }
}

/* ── Output rendering ── */
function showOutput(data) {
  const out = document.getElementById("outputBody");
  const pills = document.getElementById("resultPills");
  if (!data.output) { out.innerHTML = '<span class="err">No output</span>'; return; }

  out.innerHTML = data.output.split("\n").map(line => {
    const e = esc(line);
    if (/test .+ \.\.\. ok/.test(line)) return '<span class="ok">' + e + '</span>';
    if (/test .+ \.\.\. FAILED/.test(line)) return '<span class="fail">' + e + '</span>';
    if (/^error(\[E\d+\])?:/.test(line)) return '<span class="err">' + e + '</span>';
    if (/^warning/.test(line)) return '<span class="warn">' + e + '</span>';
    if (/test result:/.test(line)) return '<span class="' + (line.includes("ok") ? "ok" : "fail") + '">' + e + '</span>';
    if (/Compiling|Running|Finished/.test(line)) return '<span class="info">' + e + '</span>';
    return e;
  }).join("\n");

  pills.innerHTML = "";
  if (data.total > 0) {
    if (data.passed) pills.innerHTML += '<span class="rpill p">' + data.passed + ' passed</span>';
    if (data.failed) pills.innerHTML += '<span class="rpill f">' + data.failed + ' failed</span>';
  } else if (data.status === "compile_error") {
    pills.innerHTML = '<span class="rpill f">Compile Error</span>';
  }
}

function updatePill(status) {
  const p = document.getElementById("statusPill");
  if (status === "pass") { p.textContent = "PASSED"; p.className = "status-pill pass"; }
  else if (status === "compile_error") { p.textContent = "COMPILE ERROR"; p.className = "status-pill error"; }
  else { p.textContent = "FAILED"; p.className = "status-pill fail"; }
}

function setDot(name, cls) {
  const d = document.querySelector('.ex-item[data-name="' + name + '"] .ex-dot');
  if (d) { d.className = "ex-dot"; if (cls) d.classList.add(cls); }
}

function updateProgress() {
  const n = exercises.length, p = passed.size;
  document.getElementById("progressBar").style.width = (n ? p / n * 100 : 0) + "%";
  document.getElementById("progressLabel").textContent = p + "/" + n;
}

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
