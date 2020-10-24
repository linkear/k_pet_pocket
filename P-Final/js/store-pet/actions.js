var eliminar = function(){
    /*swal({
        title: "¡Eliminar!",
        text: "¿Desea usted eliminar este producto?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Tu producto se ha eliminado!", {
            icon: "success",
          });
        } else {
          swal("Tu producto no se ha eliminado!");
        }
      }); */
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: '¡Eliminar!',
        text: "¿Desea usted eliminar este producto?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            '¡Eliminado!',
            'Tu producto se ha eliminado',
            'success'
          )
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Tu producto no se ha eliminado',
            'error'
          )
        }
      })
}

var actualizar = function() {
    Swal.fire({
        'title': 'Correcto',
        'text': 'Producto actualizado correctamente',
        'icon': 'success',
    })
    
}