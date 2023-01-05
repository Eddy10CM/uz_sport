export const USERFORM = {
    firstName: {
        label: 'Nombre',
        value: '',
        type: 'text',
        validation: {
          required: true,
          /*minLength: 5,
          maxLength: 10*/
        }
    },
    lastName: {
        label: 'Apellido',
        value: '',
        type: 'text',
        validation: {
          required: true,
          /*minLength: 5,
          maxLength: 10*/
        }
    },
    gender: {
        label: 'Genero',
        value: '',
        type: 'radio',
        values: ['Hombre', 'Mujer', 'Otro'],
        validation: {
            required: true
        }        
    },
    address: {
        label: 'Dirección',
        value: '',
        type: 'text',
        validation: {
          required: true,
          /*minLength: 5,
          maxLength: 10*/
        }
    },
    birthday: {
        label: 'Fecha de nacimiento',
        value: '',
        type: 'date',
        validation: {
            required: true
        }
    },
    city: {
        label: 'Ciudad',
        value: '',
        type: 'text',
        validation: {
            required: true
        }
    },
    phone: {
        label: 'Telefono',
        value: '',
        type: 'text',
        validation: {
            required: true
        }
    },
    photoUrl: {
        label: 'Foto',
        value: '',
        type: 'file',
        validation: {
            required: true
        }
    }
    /*,
    roles: {
        label: '',
        value: '',
        type: 'select',
        values: ['Jugador', 'Arbitro', 'Couch'],
        validation: {
            required: true
        }
    }*/
} 