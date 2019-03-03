
import React from 'react';
import Table from './Table/table.jsx';
import Training from './Training/Training.jsx';
const love = ['love', 'loves', 'loved'];
const go = ['go', 'goes', 'went'];
class Entry extends React.Component {
  render() {
    return <div>
      <Table verb={go}/>
      <Training/>
    </div>;
  }
}

export default Entry;
