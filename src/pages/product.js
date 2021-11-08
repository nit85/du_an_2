import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../images/slide1.jpg'
import image2 from '../images/slide2.jpg'

import { carousel } from 'bootstrap';
const Product = () => {
  return (
    <div   style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh'
    }}>
     <div>


     </div>
    

  
    


<main class="container">
          <header class="row text-center"></header>
      <section class="row">
        <div class="col mt-4">
          <div class="card">
            <div class="card-header">
              <h2>List of Product</h2>
            </div>
            <div class="card-body">
              <table class="table table-striped table-inverse">
                <thead class="thead-inverse">
                  <tr>
                    <th><input type="checkbox" class="form-check-input" /> </th>
                    <th></th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Discount</th>
                    <th>Status</th>
                    <th>Category</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input type="checkbox" class="form-check-inline" /> </td>
                    <td><img src= {image1} width="70" class="img-fluid" alt="" /></td>
                    <td>Hat</td>
                    <td>500</td>
                    <td>50.4</td>
                    <td>5%</td>
                    <td>BestSeller</td>
                    <td>Organic</td>
                    <td>
                      <a href="" class="btn btn-outline-info"><i class="fas fa-info"></i>Thêm</a> &ensp;
                      <a href="" class="btn btn-outline-warning"><i class="fas fa-edit"></i>Sửa</a>&ensp;
                      <a href="" class="btn btn-outline-danger"><i class="fas fa-recycle"></i>Xóa</a>&ensp;
                    </td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" class="form-check-inline" /> </td>
                    <td><img src= {image2} width="70" class="img-fluid" alt="" /></td>
                    <td>Hat</td>
                    <td>500</td>
                    <td>50.4</td>
                    <td>5%</td>
                    <td>BestSeller</td>
                    <td>Organic</td>
                    <td>
                      <a href="" class="btn btn-outline-info"><i class="fas fa-info">Thêm</i></a>&ensp;
                      <a href="" class="btn btn-outline-warning"><i class="fas fa-edit">Sửa</i></a>&ensp;
                      <a href="" class="btn btn-outline-danger"><i class="fas fa-recycle">Xóa</i></a>&ensp;
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer text-muted">
              <form action="" method="get">
                <div class="form-inline float-left">
                  <label for="">Page Size</label>
                  <select class="form-control" name="" id="">
                    <option>5</option>
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                  </select>
                </div>
              </form>
           
            </div>
            
          </div>
          <div className="pagi" >
          <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <span class="page-link">Previous</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <span class="page-link">2</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
</div>

        </div>
      </section>
      <footer class="row"></footer>
</main>

    </div>
  );
};

export default Product;
