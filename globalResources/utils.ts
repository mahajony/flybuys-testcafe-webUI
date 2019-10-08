import { ClientFunction, Selector } from "testcafe";
import { TagName } from "./constants";

/**
 * Return type of selector if element is a string or selector
 * @param element
 */
function selectorType(element: string | Selector): Selector {
    let selector;
    if (typeof element === "string") {
      selector = Selector(element);
    } else {
      selector = element;
    }
    return selector;
  }
  
/**
 * returns the innertext/value of the element given
 * @param element The element want to get the value/innertext
 */
// eslint-disable-next-line
export async function getText(element: string | Selector): Promise<any> {
    const selector = selectorType(element);
    const tag = await selector.tagName;
    switch (tag) {
      case TagName.INPUT:
        return selector.value;
      case TagName.SELECT:
        return selector.value;
      default:
        return selector.innerText;
    }
  }
  
/**
 * Returns the url of the current page
 */
export const getURL = ClientFunction(() => document.location.href);
