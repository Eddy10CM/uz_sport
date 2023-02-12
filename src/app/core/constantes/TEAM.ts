export const TEAMFORM = {
    name: {
        label: 'Nombre equipo',
        value: '',
        type: 'text',
        validation: {
          required: true,
        }
    },
    teamLogo: {
        label: 'Logo equipo',
        value: '',
        type: 'file',
        validation: {
            required: false
        }
    },
    photoTeam: {
        label: 'Foto',
        value: '',
        type: 'file',
        validation: {
            required: false
        }
    },
    category: {
        label: 'Categoria',
        value: '',
        type: 'select',
        values: ['Infantil', 'Femenil', 'Varonil', 'Mixto'],
        validation: {
            required: true
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
    city: {
        label: 'Ciudad',
        value: '',
        type: 'text',
        validation: {
            required: true
        }
    }
}