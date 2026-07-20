const input = document.getElementById("input");
const output = document.getElementById("output");
const statusEl = document.getElementById("status");
const buttons = document.querySelectorAll("[data-mode]");

function setStatus(message) {
  statusEl.textContent = message;
}

async function run(mode) {
  const text = input.value.trim();
  if (!text) {
    setStatus("Please paste some text first.");
    return;
  }

  setStatus("Thinking...");
  output.textContent = "";
  buttons.forEach((b) => (b.disabled = true));

  try {
    const res = await fetch("/api/assist", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ text, mode }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Request failed");

    output.textContent = data.result;
    setStatus("Done.");
  } catch (err) {
    setStatus("Error: " + err.message);
  } finally {
    buttons.forEach((b) => (b.disabled = false));
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => run(button.dataset.mode))
);
