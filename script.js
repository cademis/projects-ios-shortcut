// the below script is used to filter a JSON array down to a chosen area and search queries. The search queries are separated by a space and are not case sensitive. 

// replace below with ios shortcuts dictionary input

let dict = {"area": "P2", "search": "research"}

let inputArea = dict.area;
let inputSearch = dict.search.toLowerCase(); // convert to lowercase

let searchWords = inputSearch.split(" ");

// Replace below with ios shortcuts text input. #todo #1 Find a clean way to import this data from google sheets.

let projectsStr = '[{"ProjectID":"E3/001","ProjectDescription":"The Optimal Time of Day for Low and High Intensity Training","Area":"E3"},{"ProjectID":"P2/001","ProjectDescription":"Tools I Use to Consume Research Content","Area":"P2"},{"ProjectID":"P2/002","ProjectDescription":"New research description","Area":"P2"}]';

let projectsArray = JSON.parse(projectsStr);

let filteredData = projectsArray.filter(item => item.Area === inputArea && searchWords.every(word => item.ProjectDescription.toLowerCase().includes(word))); // convert to lowercase

let output = filteredData.map(item => {
  return {"id": item.ProjectID, "description": item.ProjectDescription, "area": item.Area};
});

document.body.textContent = encodeURIComponent(JSON.stringify(output))
