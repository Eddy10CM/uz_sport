export const PLAYERFORM = {
    name: {
        label: 'Nombre',
        value: '',
        type: 'text',
        validation: {
          required: true,
        }
    },
    photoUrl: {
        label: 'Foto',
        value: '',
        type: 'file',
        validation: {
            required: false
        }
    },
    birthday: {
        label: 'Cumpleaños',
        value: '',
        type: 'date',
        validation: {
            required: false 
        }
    },
    address: {
        label: 'Direccion',
        value: '',
        type: 'text',
        validation: {
            required: true
        }
    },
    position: {
        label: 'Posicion',
        value: '',
        type: 'select',
        values: ['Base', 'Escolta', 'Alero', 'Ala', 'Pivot'],
        validation: {
            required: true
        }
    },
    email: {
        label: 'correo',
        value: '',
        type: 'text',
        validation: {
            required: true
        }
    }
} 