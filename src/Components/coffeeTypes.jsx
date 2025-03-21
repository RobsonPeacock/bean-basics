import { Outlet } from 'react-router-dom';
import Content from '../content';
import { Link } from 'react-router-dom';

const coffeeTypes = () => {
  return (
    <div>
      {Object.entries(Content.coffeeTypes).map(([key, _value]) => (
        <div key={key}>
          <Link to={key}>{key}</Link>
        </div>
      ))

      }
      <Outlet />
    </div>
  )
}

export default coffeeTypes;