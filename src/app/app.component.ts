import { Component } from '@angular/core';
import { placeholder } from '@cloudinary/ng';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bán nước giải khát';
  ngOnInit(){
    Swal.fire({
      title: '<p style="font-size:20px; padding-top:20px">Vui lòng nhập họ tên và xác nhận bạn đã đủ 18 tuổi để tiếp tục (theo quy định khi mua rượu bia)</p>',
      input:'text',
      imageUrl: 'https://images.unsplash.com/photo-1441985969846-3e7c90531139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJlZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  imageWidth: 500,
  imageHeight: 300,
      // html:'<input type="text" placeholder="Họ và tên *" style="outline:none; padding: 0 5px;width:100%; height:50px ;border: 1px solid #e9eaeb">',
      showCancelButton: false,
      confirmButtonText: 'Tôi trên 18 tuổi',
      cancelButtonText:'Tôi ',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Vui lòng nhập Họ và Tên`
            )
          })
      }
      
    })
  }
}
