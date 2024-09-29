import { dataSourceSix as datasource } from "./data.js";

function traverse(rootData, rootElement, width, height) {
  try {
    const ratio = width / height;
    const elementFlexClass = ratio > 1 ? "flex-row" : "flex-col";

    if (rootData.type === "child") {
      const leaf = document.createElement("div");
      leaf.className = "leaf";
      leaf.style.position = "relative";
      leaf.style.width = `${width}px`;
      leaf.style.height = `${height}px`;
      leaf.innerHTML = `
            <p>Component ${rootData.name}</p>
        `;
      rootElement.appendChild(leaf);
    } else {
      const element = document.createElement("div");
      element.classList.add("root");
      element.classList.add(elementFlexClass);

      element.style.width = `${width}px`;
      element.style.height = `${height}px`;

      rootElement.appendChild(element);

      for (const e of rootData.leaves) {
        if (ratio > 1) {
          if (rootData.leaves.length > 1) {
            traverse(e, element, width / 2, height);
          } else {
            traverse(e, element, width, height);
          }
        } else {
          traverse(e, element, width, height / 2);
        }
      }
    }
  } catch (err) {
    console.log(err);
    console.log({ rootData, width, height });
  }
}

const body = document.getElementsByTagName("body")[0];
const bodyWidth = body.clientWidth;
const bodyHeight = body.clientHeight;

traverse(datasource, body, bodyWidth, bodyHeight);
const leaves = document.querySelectorAll(".leaf");

Array.from(leaves).forEach((leaf) => {
  const leafWidth = leaf.clientWidth;
  const bgOpacity = 1 - leafWidth / bodyWidth;
  leaf.style.backgroundColor = `rgba(51,51,51, ${bgOpacity})`;
  leaf.innerHTML = `${leaf.innerHTML} ${leaf.clientWidth} x ${leaf.clientHeight}`;
});
