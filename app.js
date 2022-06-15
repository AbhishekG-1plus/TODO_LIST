      function getAndupdate()
      {
      console.log("Updating")
      tit = document.getElementById('title').value;
      desc = document.getElementById('description').value;
      if(localStorage.getItem('itemsJson')==null)
      {
        itemJsonArray = [];
        itemJsonArray.push([tit,desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
      }
      else
      {
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit,desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
      }
        update();
      }
      
      function update(){
        if(localStorage.getItem('itemsJson')==null)
      {
        itemJsonArray = [];
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
      }
      else
      {
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
      }
        //Add in the table
        let tableBody = document.getElementById('tablebody');
        let str ="";
        itemJsonArray.forEach((element,index) => {
          str += `
              <tr>
              <th scope="row">${index+1}</th>
              <td>${element[0]}</td>
              <td>${element[1]}</td>
              <td><button class="btn btn-sm btn-primary" onClick="deleted(${index})">Delete</button></td>
            </tr>
            `
          });
          tableBody.innerHTML = str; 
      }
      add = document.getElementById("add");
      add.addEventListener("click",getAndupdate);
      update();
      function deleted(itemIndex)
      {
        console.log("Delete",itemIndex);
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        //Delete item index element from the array
        itemJsonArray.splice(itemIndex,1);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
        update();
      }
      function cleararr()
      {
        if(confirm("Do you want to clear the list?"))
        {
        console.log("Clearing the storage");
        localStorage.clear();
        update()
        }
      }