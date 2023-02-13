import imageMain from '../../components/images/packages/Giza.jpg'
import SubImg1 from '../../components/images/packages/memphis.jpeg'
import SubImg2 from '../../components/images/packages/dhashur.jpg'
import SubImg3 from '../../components/images/packages/saqqara.jpg'
import imageMain2 from '../../components/images/packages/cairotower.jpg'
import SubImg4 from '../../components/images/packages/muhammedali.jpg'
import SubImg5 from '../../components/images/packages/musuemEgy.jpg'
import SubImg6 from '../../components/images/packages/salahuddien.jpg'


const data = [
    {
        id: '1',
        tripName: 'Around giza',
        tripDetails: 'Pyramids of giza + sphinx + panorama view of the pyramids + ruins of memphis + pyramid of saqqara + pyramid of djoser(dahshur)'
        ,
        tripPrice: '70$',
        imageMain: imageMain,
        subImg: [SubImg1, SubImg2, SubImg3]
    },
    {
        id: '2',
        tripName: 'Around Cairo',
        tripDetails: 'Cairo tower + Qahera\'at al moez ST + egyptian museum + civilization museum + salahuddien caslte + muhammed ali mosque ',
        imageMain: imageMain2,
        subImg: [SubImg4, SubImg5, SubImg6]
    }
]



export default data;