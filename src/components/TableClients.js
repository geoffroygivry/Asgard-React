import React from "react";

const TableClients = props => {
  return (
    <div className="mdl-layout">
      <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
        <thead>
          <tr>
            <th class="mdl-data-table__cell--non-numeric">Name</th>
            <th>email</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">Georges Fufil</td>
            <td>gf@gmail.com</td>
            <td>Tartif inc.</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">gigi anamo</td>
            <td>gigi@me.com</td>
            <td>anamo std.</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">Geoffroy Givry</td>
            <td>geoffroy@anthracitelab.com</td>
            <td>anthracitelab</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableClients;
