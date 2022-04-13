import React ,{useState} from "react";

export default function addexpense(){


    return(
<div>
 <form>
  <div class="mb-3">
    <label for="expensetype" class="form-label">Expense Type</label>
    <select id="type" name="expense" size="3" multiple>
    <option value="Salary">Salary</option>
    <option value="suppliercost">supplier cost</option>
    <option value="maintenance">maintenance</option>
  </select>
    
  </div>
  <div class="mb-3">
    <label for="date1" class="form-label">Date</label>
    <input type="date" class="form-control" id="date1"  />
    
  </div>
  <div class="mb-3">
    <label for="total" class="form-label">total amount</label>
    <input type="text" class="form-control" id="total" placeholder="total amount" />
    
  </div>
  <div class="mb-3">
    <label for="description" class="form-label">enter description</label>
    <input type="text" class="form-control" id="description" placeholder="description" />
    
  </div>
   <button type="submit" class="btn btn-primary">Submit</button>
   
 </form>
</div>


    )
}