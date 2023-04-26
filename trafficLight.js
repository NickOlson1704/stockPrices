function updateLight(current) {
    switch (current) {
      case "green":
        return "yellow";
      case "yellow":
        return "red";
      case "red":
        return "green";
      
    }
  }

  let current = "green";
  console.log(current); 
  
  current = updateLight(current);
  console.log(current); 
  
  current = updateLight(current);
  console.log(current); 
  
  current = updateLight(current);
  console.log(current); 