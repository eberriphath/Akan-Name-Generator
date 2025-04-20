document.getElementById("Form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const gender = document.querySelector("input[name='gender']:checked");
  
    if (!gender) {
      alert("Try selecting gender.");
      return;
    }
  
    if (isNaN(day) || day < 1 || day > 31) {
      alert("Enter valid day.");
      return;
    }
  
    if (isNaN(month) || month < 1 || month > 12) {
      alert("Enter valid month.");
      return;
    }
  
    const CC = Math.floor(year / 100);
    const YY = year % 100;
    const MM = month;
    const DD = day;
  
    const d = Math.floor(((4 * CC - 2 * CC - 1) + (5 * YY) + (Math.floor(26 * (MM + 1) / 10)) + DD) % 7);
    const dayOfWeek = (d + 7) % 7;
  
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  
    const name = gender.value === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];
  
    document.getElementById("result").innerText = `Born on ${getDayName(dayOfWeek)}. Akan name is ${name}.`;
  });
  
  function getDayName(index) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[index];
  }
  

