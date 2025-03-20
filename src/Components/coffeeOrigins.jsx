import Content from '../content';

const coffeeOrigins = () => {
  return (
    <div>
      {Object.entries(Content.coffeeOrigins).map(([key, value]) => (
        <>
          <p>{key}</p>
          <p>{value.description}</p>
        </>
      ))

      }
  </div>
  )
}

export default coffeeOrigins;