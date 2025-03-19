import Content from '../content';

const coffeeTypes = () => {
  return (
    <div>
      {Object.entries(Content.coffeeTypes).map(([key, value]) => (
        <>
          <p>{key}</p>
          <p>{value.description}</p>
        </>
      ))

      }
    </div>
  )
}

export default coffeeTypes;