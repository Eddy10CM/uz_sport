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
    roles: {
        label: '',
        value: '',
        type: 'select',
        values: ['Jugador', 'Arbitro', 'Couch'],
        validation: {
            required: true
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
    Specialty: {
        label: 'Especialidad',
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