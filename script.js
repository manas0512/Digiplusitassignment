function addNode() {
    const tree = document.getElementById('tree');
    const nodeType = document.getElementById('node-type').value;
    const nodeName = document.getElementById('node-name').value;
  
    const newNode = document.createElement('div');
    newNode.textContent = `${nodeName} (${nodeType})`;
  
    tree.appendChild(newNode);
  }
  
  function updateNode() {
    alert("Updated!");
  }
  
  function addNode() {
    const tree = document.getElementById('tree');
    const nodeType = document.getElementById('node-type').value;
    const nodeName = document.getElementById('node-name').value;
  
    const newNode = document.createElement('div');
    newNode.textContent = `${nodeName} (${nodeType})`;
  
    tree.appendChild(newNode);
  }
  
  function deleteNode() {
    const tree = document.getElementById('tree');
    const lastNode = tree.lastChild;
  
    if (lastNode) {
      tree.removeChild(lastNode);
    } else {
      alert("No nodes to delete!");
    }
  }
  