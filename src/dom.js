export function learnElementNames(XML_dom, namespaces) {
  const root = XML_dom.documentElement;
  let i = 1;
  let qname = function(e) { 
    if (!namespaces.has(e.namespaceURI ? e.namespaceURI : "")) {
      namespaces.set(e.namespaceURI, "ns" + i++);
    } 
    return namespaces.get(e.namespaceURI ? e.namespaceURI : "") + ":" + e.localName;
  };
  const els = new Set(
    Array.from(root.querySelectorAll("*"), qname));
    
  // Add the root element to the array
  els.add(qname(root));
  return els
}