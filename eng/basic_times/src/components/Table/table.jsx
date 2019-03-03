
import React from 'react';
import './table.scss'
const firstPerson = ['I', 'You', 'We', 'They'];
const thirdPerson = ['He', 'She'];


const Columns = ({value1, value2, value3, color='green'})=>(<div className="columns">
  {value1
    ?
    <div className={`col col1 color-${color}`}>{value1.map((val, i)=>(<div key={i}>{val}</div>))}</div>
  : null}
  {value2
    ?
    <div className={`col col2 color-${color}`}>{value2.map((val, i)=>(<div key={i}>{val}</div>))}</div>
    : null}
  {value3
    ?
    <div className={`col col3 color-${color}`}>{value3.map((val, i)=>(<div key={i}>{val}</div>))}</div>
    : null}

</div>);
class Table extends React.Component {
  render() {
    const {verb} = this.props;
    return <div><table className="basic-time-table">
      <tbody>

      <tr>
        <td>
          ?
        </td>
        <td>
          -
        </td>
        <td>
          not
        </td>
        <td>

        </td>
      </tr>
      <tr>
        <td>

          <Columns
            value1={['Will']}
            value2={firstPerson.concat(thirdPerson)}
            value3={[verb[0]]}
          />

        </td>
        <td>

          <Columns
            value1={firstPerson.concat(thirdPerson)}
            value2={['will']}
            value3={[verb[0]]}
          />

        </td>
        <td>
          <Columns
            value1={firstPerson.concat(thirdPerson)}
            value2={['will not']}
            value3={[verb[0]]}
          />

        </td>
        <td>
          feature
        </td>
      </tr>
      <tr>
        <td>

          <Columns
            value1={['Do']}
            value2={firstPerson}
            value3={[verb[0]]}
          />
          <Columns
            value1={['Does']}
            value2={thirdPerson}
            value3={[verb[0]]}
            color="red"
          />
        </td>
        <td>
          <Columns
            value1={firstPerson}
            value2={[verb[0]]}
          />
          <Columns
            value2={thirdPerson}
            value3={[verb[1]]}
            color="red"
          />
        </td>
        <td>

          <Columns
            value1={firstPerson}
            value2={['don\'t']}
            value3={[verb[0]]}
          />
          <Columns
            value1={thirdPerson}
            value2={['doesn\'t']}
            value3={[verb[0]]}
            color="red"
          />


        </td>
        <td>
          present
        </td>
      </tr>
      <tr>
        <td>
          <Columns
            value1={['Did']}
            value2={firstPerson.concat(thirdPerson)}
            value3={[verb[0]]}
          />

        </td>
        <td>
          <Columns
            value2={firstPerson.concat(thirdPerson)}
            value3={[verb[2]]}
          />
        </td>
        <td>
          <Columns
            value1={firstPerson.concat(thirdPerson)}
            value2={['didn\'t']}
            value3={[verb[0]]}
          />
        </td>
        <td>
          past
        </td>
      </tr>
      </tbody>
    </table></div>;
  }
}

export default Table;
