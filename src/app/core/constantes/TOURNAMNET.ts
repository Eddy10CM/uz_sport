export const LEAGUEFORM = {
  Name: {
    label: 'Nombre torneo',
    value: '',
    type: 'text',
    validation: {
      required: true,
      /*minLength: 5,
      maxLength: 10*/
    }
  },
  Description: {
    label: 'Descripcion',
    value: '',
    type: 'text',
    validation: {
      required: true
    }
  },
  DiasDeJuego: {
    label: 'Dias a jugar',
    value: '',
    type: 'multiple',
    values: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
    validation: {
      required: true
    }
  },
  StartDate: {
    label: 'Inicio de torneo',
    value: '',
    type: 'date',
    validation: {
      required: true
    }
  },
  EndDate: {
    label: 'Fin de torneo',
    value: '',
    type: 'date',
    validation: {
      required: true
    }
  },
  InicioDeJuegos: {
    label: 'Hora de inicio Juegos',
    value: '',
    type: 'number',
    min: 0,
    max: 24,
    validation: {
      required: true
    }
  },
  EndJuego: {
    label: 'Hora de fin Juegos',
    value: '',
    type: 'number',
    min: 0,
    max: 24,
    validation: {
      required: true
    }
  },
  Categoria: {
    label: 'Categoria',
    value: '',
    type: 'select',
    values: ['Infantil', 'Femenil', 'Varonil', 'Mixto'],
    validation: {
      required: true
    }
  },
  Precio: {
    label: 'Costo',
    value: '',
    type: 'text',
    validation: {
      required: true
    }
  },
  Logo: {
    label: 'Logo',
    value: '',
    type: 'file',
    validation: {
      required: false
    }
  }
}