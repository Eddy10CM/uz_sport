export const TEAMFORM = {
    Name: {
        label: 'Nombre equipo',
        value: '',
        type: 'text',
        validation: {
          required: true,
        }
    },
    Birthday: {
        label: 'Cumpleaños',
        value: '',
        type: 'date',
        validation: {
            required: false
        }
    },
    TeamLogo: {
        label: 'Logo equipo',
        value: '',
        type: 'file',
        validation: {
            required: false
        }
    },
    Category: {
        label: 'Categoria',
        value: '',
        type: 'select',
        values: ['Infantil', 'Femenil', 'Varonil', 'Mixto'],
        validation: {
            required: true
        }
    },
    Captain: {
        label: 'Capitan',
        value: '',
        type: 'text',
        validation: {
          required: true,
        }
    },
    Contact: {
        label: 'Contacto',
        value: '',
        type: 'text',
        validation: {
            required: true
        }
    },
    Email: {
        label: 'Correo',
        value: '',
        type: 'text',
        validation: {
            required: true
        }
    },
    PhotoUrl: {
        label: 'Foto',
        value: '',
        type: 'file',
        validation: {
            required: false
        }
    },
    socialMedia: {
        label: 'Social Media',
        value: '',
        type: 'text',
        validation: {
          required: true,
        }
    },
    Rate: {
        label: 'Rate',
        value: '',
        type: 'text',
        validation: {
            required: true
        }
    },
    Players: {
        label: 'Jugadores',
        value: '',
        type: 'text',
        validation: {
            required: true
        }
    },
    fansLike: {
        label: 'Likes',
        value: '',
        type: 'text',
        validation: {
            required: true
        }
    },
    City: {
        label: 'Ciudad',
        value: '',
        type: 'text',
        validation: {
            required: true
        }
    }
}