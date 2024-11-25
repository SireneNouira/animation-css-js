let inputColor = document.getElementById("color");

inputColor.addEventListener("change", handleSetProperty);
spacingId.addEventListener("change", handleChangeSpacing);
blurId.addEventListener("change", handleChangeBlur);

function handleSetProperty() {
  document.documentElement.style.setProperty("--color", inputColor.value);
}

function handleChangeSpacing() {
  const spacingId = document.getElementById("spacingId");
  document.documentElement.style.setProperty(
    "--spacing",
    spacingId.value + "vh"
  );
}

function handleChangeBlur() {
  const blurId = document.getElementById("blurId");
  document.documentElement.style.setProperty("--blur", blurId.value + "vh");
}
