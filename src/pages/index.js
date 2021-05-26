import Layout from '../components/Layout'
import Lotofacil from '../components/Lotofacil2'

export default function Home(data) {
  return (
    <>
      <Layout>
        <Lotofacil {...data}/>
      </Layout>
    </>
  )
}

export async function getStaticProps(context) {

  const resultado_fixar = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25']
  const soma = ['184 à 199', '200 à 215', '168 à 183', '216 à 231', '152 à 167', '232 à 247', '136 à 151', '120 à 135', '264 à 270', '248 à 263']
  const linha = [43332, 44322, 44331, 53322, 54321, 44421, 33333, 54222, 53331, 44430, 54411, 54330, 54420, 55221, 55311, 55320, 55500, 55410]
  const coluna = [43332, 44322, 44331, 53322, 54321, 44421, 33333, 54222, 53331, 54330, 54411, 55221, 54420, 44430, 55320, 55311, 55500, 55410]
  const par_impar = ['7 8', '8 7', '6 9', '9 6', '5 10', '10 5', '4 11', '11 4', '3 12', '2 13', '12 3']
  const repetido = ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15']
  const primo_cruz = ['01', '02', '03', '04', '05', '06', '07', '08', '09']
  const fibonacci = ['01', '02', '03', '04', '05', '06', '07']
  const xis = ['02', '03', '04', '05', '06', '07', '08', '09']

  const data = [resultado_fixar,soma,linha,coluna,par_impar,repetido,primo_cruz,fibonacci,xis]
  return {
    props: {data}, 
  }
}

