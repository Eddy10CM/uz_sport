export const jsonForm = {
    Name: {
        label: 'Nombre',
        value: '',
        type: 'text',
        validation: {
          required: true,
          /*minLength: 5,
          maxLength: 10*/
        }
    },
    Experiencia: {
        label: 'Experiencia',
        value: '',
        type: 'text',
        validation: {
            required: true,
          /*minLength: 5,
          maxLength: 10*/
        }
    },
    ProfilePic: {
        label: 'Imagen de Pérfil',
        value: '',
        type: 'file',
        validation: {
            required: true
        }
    },
  
    Contact: {
        label: 'Contacto',
        value: '',
        type: 'text',
        validation: {
            required: true
        }
    }
} 