import imageMain from '../../components/images/packages/Giza.jpg'
import SubImg1 from '../../components/images/packages/memphis.jpeg'
import SubImg2 from '../../components/images/packages/dhashur.jpg'
import SubImg3 from '../../components/images/packages/saqqara.jpg'
import SubImg4 from '../../components/images/packages/pano.webp'
import imageMain2 from '../../components/images/packages/cairotower.jpg'
import SubImg5 from '../../components/images/packages/muhammedali.jpg'
import SubImg6 from '../../components/images/packages/musuemEgy.jpg'
import SubImg7 from '../../components/images/packages/salahuddien.jpg'
import SubImg8 from '../../components/images/packages/almoez.jpg'
import imageMain3 from '../../components/images/packages/pyramids.png'
import SubImg9 from '../../components/images/packages/khan.jpg'
import SubImg10 from '../../components/images/packages/sphinx.jpg'
import SubImg11 from '../../components/images/packages/bazaar.jpg'
import SubImg12 from '../../components/images/packages/almoez.jpg'


const data = [
    {
        id: '1',
        tripName: 'Around giza',
        tripDetails: 'Pyramids of giza + sphinx + panorama view of the pyramids + ruins of memphis + pyramid of saqqara + pyramid of djoser(dahshur)',
        tripPrice: '70$',
        imageMain: imageMain,
        subImg: [SubImg1, SubImg2, SubImg3, SubImg4]

    },
    {
        id: '2',
        tripName: 'Around Cairo',
        tripDetails: 'Cairo tower + Qahera\'at al moez ST + egyptian museum + civilization museum + salahuddien castle + muhammed ali mosque ',
        tripPrice: '70$',
        imageMain: imageMain2,
        subImg: [SubImg5, SubImg6, SubImg7, SubImg8]
    },
    {
        id: '3',
        tripName: 'From west to east tour',
        tripDetails: 'Giza pyramids + sphinx + Giza bazaar tour +Khan Khalil + Qaher\'at Al Moez ',
        tripPrice: '70$',
        imageMain: imageMain3,
        subImg: [SubImg9, SubImg10, SubImg11, SubImg12]
    }
]



export default data;