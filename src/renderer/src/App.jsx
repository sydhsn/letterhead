import Header from './components/Header'
import { EditText, EditTextarea } from 'react-edit-text'
import imgage from './brand.png'
import generatePDF, { Resolution, Margin } from 'react-to-pdf'
import './styles.scss'

const options = {
  // default is `save`
  method: 'save',
  // default is Resolution.MEDIUM = 3, which should be enough, higher values
  // increases the image quality but also the size of the PDF, so be careful
  // using values higher than 10 when having multiple pages generated, it
  // might cause the page to crash or hang.
  resolution: Resolution.NORMAL,
  page: {
    // margin is in MM, default is Margin.NONE = 0
    margin: Margin.SMALL,
    // default is 'A4'
    format: 'A4',
    // default is 'portrait'
    orientation: 'portrait'
  },
  canvas: {
    // default is 'image/jpeg' for better size performance
    mimeType: 'image/png',
    qualityRatio: 1
  },
  // Customize any value passed to the jsPDF instance and html2canvas
  // function. You probably will not need this and things can break,
  // so use with caution.
  overrides: {
    // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
    pdf: {
      compress: true
    },
    // see https://html2canvas.hertzen.com/configuration for more options
    canvas: {
      useCORS: true
    }
  }
}

// you can use a function to return the target element besides using React refs
const getTargetElement = () => document.getElementById('content-id')

function App() {
  return (
    <>
      <div className="app" id="content-id">
        <img src={imgage} alt="band" className="band" />
        <Header />
        <div className="divider" />
        <div className="content">
          <div className="ref_date">
            <div className="ref_container">
              Ref. No. :
              <EditText name="ref" defaultValue="........" />
            </div>
            <div className="ref_container">
              Date :
              <EditText name="date" defaultValue="........" />
            </div>
          </div>
          <div className="main_text_area">
            <EditTextarea
              name="textarea1"
              rows={7}
              defaultValue="Enter your main content here.."
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>
      <button
        type="button"
        className="print-button"
        onClick={() => generatePDF(getTargetElement, options)}
      >
        Generate PDF
      </button>
    </>
  )
}

export default App
