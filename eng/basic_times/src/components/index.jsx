
import React from 'react';
import Table from './Table/table.jsx';
const love = ['love', 'loves', 'loved'];
const go = ['go', 'goes', 'went'];
class Entry extends React.Component {
  render() {
    return <div>
      <Table verb={go}/>
    </div>;
  }
}

export default Entry;
