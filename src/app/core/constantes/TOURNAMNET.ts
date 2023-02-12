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
    photoUrl: {
        label: 'Logo',
        value: '',
        type: 'file',
        validation: {
            required: false
        }
    }
  }