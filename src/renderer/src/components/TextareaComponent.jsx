import { EditTextarea } from 'react-edit-text'
import { useTranslation } from 'react-i18next'

const TextareaComponent = ({ lang }) => {
  const { t } = useTranslation()

  const textareaStyle = {
    direction: lang === 'hi' ? 'ltr' : 'ltr',
    fontFamily: lang === 'hi' ? 'Kruti Dev, Arial, sans-serif' : 'Arial, sans-serif'
  }

  return (
    <div style={textareaStyle}>
      <EditTextarea
        name="textarea1"
        rows={7}
        defaultValue={t('textareaPlaceholder')}
        style={{ width: '100%' }}
      />
    </div>
  )
}

export default TextareaComponent
