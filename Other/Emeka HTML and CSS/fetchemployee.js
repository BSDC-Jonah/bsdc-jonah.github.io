async function fetchEmployees() {
    try {
      const response = await fetch("http://localhost/Emeka-HTML-and-CSS/get_employees.php");
      const employees = await response.json();
  
      const tableBody = document.getElementById("employeeTableBody");
      tableBody.innerHTML = "";
  
      employees.forEach(emp => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${emp.name}</td>
          <td>$${emp.salary}</td>
          <td>${emp.department_name}</td>
          <td>${emp.hire_date}</td>
          <td>${emp.manager_name || "—"}</td>
        `;
        tableBody.appendChild(row);
      });
  
    } catch (error) {
      console.error("Failed to fetch employees:", error);
    }
  }
  