import Card from '../Card/Card'

type Props = {}

const CardList = () => {
  return (
    <div>
        <Card companyName='Apple' ticker='AAPL' price={100} />
        <Card companyName='Microsoft ' ticker='MSFT' price={200}/>
        <Card companyName='Tesla' ticker='TSLA' price={300}/>
        <Card companyName='Amazon' ticker='AMZN' price={150}/>
        <Card companyName='Google' ticker='GOOGL' price={250}/>
        <Card companyName='Meta' ticker='META' price={180}/>
    </div>
  )
}

export default CardList