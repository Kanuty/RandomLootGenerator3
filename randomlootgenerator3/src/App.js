import React, { useState } from 'react';
import { FlexibleColumnLayout, List, StandardListItem, NotificationListItem, Title, Text, Grid, FCLLayout, ShellBar, Card, RatingIndicator, Toolbar, ToolbarDesign, ToolbarSpacer, Button, ButtonDesign, Avatar, AvatarSize, FlexBox, FlexBoxDirection, Label, } from '@ui5/webcomponents-react';

import './App.css';

function App() {

  const itemsCategoryData = [{
    movie: 'Bronie Dystansowe',
    genre: '',
    country: 'Russia'
  }, {
    movie: 'Bronie Białe',
    genre: '',
    country: 'Poland'
  }]

  const specificItemData = [{
    name: 'Halabarda'

  }, {
    name: 'Miecz Oburęczny'

  }, {
    name: 'Kusza'

  }];

  const [layout, setLayout] = useState(FCLLayout.OneColumn);
  const [selectedMovie, setSelectedMovie] = useState(itemsCategoryData[0]);
  const [selectedCast, setSelectedCast] = useState(specificItemData[0]);

  const onStartColumnClick = e => {
    setSelectedMovie(itemsCategoryData.find(item => item.movie === e.detail.item.dataset.movie));
    setLayout(FCLLayout.TwoColumnsMidExpanded);
  };

  const onMiddleColumnClick = e => {
    setSelectedCast(specificItemData.find(item => item.name === e.detail.item.dataset.name));
    setLayout(FCLLayout.ThreeColumnsEndExpanded);
  };
  return (
    <div className="App">
      <ui5-shellbar
        primary-title="Random Loot Generator 3.0 for Warhammer 2ed."
        secondary-title="author: Bartosz Dudek"
      >
      </ui5-shellbar>
      <Grid defaultSpan="XL6 L6 M6 S12" style={{ padding: 10, margin: 5 }} >
        <div data-layout-span="XL12 L12 M12 S12" data-layout-indent="XL0 L0 M0 S0">
        <ui5-card heading="New Purchase Orders" subheading="Today" status="3 of 15" class="medium">
	<ui5-table class="demo-table content-padding">

		<ui5-table-column slot="columns">
            <ui5-label>Sales Order</ui5-label>
		</ui5-table-column>

		<ui5-table-column slot="columns">
            <ui5-label>Customer</ui5-label>
		</ui5-table-column>

		<ui5-table-column slot="columns">
            <ui5-label>Net Amount</ui5-label>
		</ui5-table-column>

		<ui5-table-column slot="columns" min-width="450" popin-text="Status" demand-popin>
            <ui5-label>Status</ui5-label>
		</ui5-table-column>

		<ui5-table-row >
			<ui5-table-cell>
				<ui5-label>5000010051</ui5-label>
			</ui5-table-cell>
			<ui5-table-cell>
				<ui5-label>Brazil Techologies</ui5-label>
			</ui5-table-cell>
			<ui5-table-cell>
					<ui5-label>2k USD</ui5-label>
			</ui5-table-cell>
			<ui5-table-cell>
				<span class="status-error">Rejected</span>
			</ui5-table-cell>
		</ui5-table-row>

	</ui5-table>
</ui5-card>
        </div>
        <div>
          <FlexibleColumnLayout
            className=""
            layout="TwoColumnsStartExpanded"
            onLayoutChange={function noRefCheck() { }}
            slot=""
            startColumn={
              <div>
                <List>
                  <ui5-button design="Positive" >Losuj przedmiot</ui5-button>
                  <ui5-button design="Negatice" >Oczyść listę</ui5-button>
                </List>
                <List headerText="Lista przedmiotów losowanych" mode="Delete">
                  <StandardListItem>List Item 1</StandardListItem>
                  <StandardListItem>List Item 2</StandardListItem>
                  <StandardListItem>List Item 1</StandardListItem>
                  <StandardListItem>List Item 2</StandardListItem>
                  <StandardListItem>List Item 1</StandardListItem>
                  <StandardListItem>List Item 2</StandardListItem>
                  <StandardListItem>List Item 1</StandardListItem>
                  <StandardListItem>List Item 2</StandardListItem>
                </List>
              </div>}
            midColumn={

              <List headerText="Wylosowane">
                <StandardListItem>xxx</StandardListItem>

              </List>} Z
            style={{}}
            tooltip=""
          />
        </div>
        <div>
          <FlexibleColumnLayout
            layout="TwoColumnsStartExpanded" style={{
              height: '600px'
            }} layout={layout} startColumn={<>

              <List headerText="Kategorie przedmiotów do losowania" onItemClick={onStartColumnClick}>
                {itemsCategoryData.map(item => <StandardListItem description={item.genre} data-movie={item.movie}>
                  {item.movie}
                </StandardListItem>)}
              </List>
            </>} midColumn={<>
              <Toolbar design={ToolbarDesign.Solid}>
                <Title>{selectedMovie.movie}</Title>
                
                <ToolbarSpacer />
                <Button icon="decline" design={ButtonDesign.Transparent} onClick={() => {
                  setLayout(FCLLayout.OneColumn);
                }} />
              </Toolbar>
              <ui5-button design="Negatice" >Dodaj wszystkie wybrane</ui5-button>
              <List headerText="Cast" mode="MultiSelect">
                {specificItemData.map(item => <StandardListItem description={item.gender} data-name={item.name}>
                  {item.name}
                </StandardListItem>)}
              </List>
            </>} />
        </div>

      </Grid>

    </div>
  );
}

export default App;
