const wrapper = document.querySelector(".wrapper"),
    selectBtn = wrapper.querySelector(".select-btn"),
    searchInp = wrapper.querySelector("input"),
    options = wrapper.querySelector(".options");

let sectors = ["Manufacturing", "Construction materials", "Electronics and Optics", "Food and Beverage", "Bakery & confectionary products", "Beverages", "Fish & fish products",
    "Meat & meat products", "Milk & milk products", "Other", "Sweets & snack products", "Furniture", "Bathroom/sauna", "Bedroom", "Children's room",
    "Kitchen", "Living room", "Office", "Other(Furniture)", "Outdoor", "Project Furniture", "Machinery", "Machinery Components",
    "Machinery equipments/tools", "Manufacture of machinery", "Maritime", "Aluminium and steel workboats", "Boat/Yacht building", "Ship repair and conversion", "Metal structures", "Other",
    "Repair and maintenance service", "Metalworking", "Construction of metal structures", "House and buildings", "Metal products", "Metal works", "CNC-machining", "Forgings, Fasteners",
    "Gas,Plasma,Laser cutting", "MIG, TIG, Aluminium welding", "Plastic and Rubber", "Packaging", "Plastic goods", "Plastic processing technology", "Blowing", "Moulding", "Plastic welding and processing", "Plastic profiles", "Printing ", "Advertising", "Book/Periodicals printing ", "Labelling and packaging printing", "Textile and clothing ", "Clothing ", "Textile ", "Wood ", "Other ", "Wooden building materials ", "Wooden houses ", "Other", "Creative industries", "Energy Technology ", "Environment ", "Service ",
    " Business Services ", "Engineering ", "Information technology and Telecommunications ", "Data processing, Web portals, E-marketing", "Programming, Consultancy ", "Software, Hardware ", "Telecommunications ", "Tourism ", "Translation services ", "Transport and logistics ", "Air ", "Rail ", "Road ", "Water "];

function addSector(selectedSector) {
    options.innerHTML = "";
    sectors.forEach(sector => {
        let isSelected = sector == selectedSector ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${sector}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addSector();

function updateName(selectedLi) {
    searchInp.value = "";
    addSector(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = sectors.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! This Sector not found</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));