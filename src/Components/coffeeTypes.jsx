import { Outlet } from 'react-router-dom';
import Content from '../content';

const coffeeTypes = () => {
  return (
    <div>
      {Object.entries(Content.coffeeTypes).map(([key, _value]) => (
        <div key={key}>
          <p>{key}</p>
        </div>
      ))

      }
      <Outlet />
    </div>
  )
}

export default coffeeTypes;