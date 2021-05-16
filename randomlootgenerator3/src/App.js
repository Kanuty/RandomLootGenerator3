import React, { useState } from 'react';
import { FlexibleColumnLayout, List, StandardListItem,  Title,  Grid, FCLLayout, Toolbar, ToolbarDesign, ToolbarSpacer, Button, ButtonDesign } from '@ui5/webcomponents-react';
// import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme';
import "@ui5/webcomponents/dist/Assets.js";
import "@ui5/webcomponents-fiori/dist/Assets.js"; //  if you use @ui5/webcomponents-fiori
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";
import './App.css';

function App() {

  // setTheme("sap_belize");
  // setTheme("sap_belize_hcb");
  // setTheme("sap_belize_hcw");
  setTheme("sap_fiori_3");
  // setTheme("sap_fiori_dark");
  const itemsCategoryData = [{
    movie: 'Bronie Dystansowe',
    genre: '',
    country: 'Russia'
  }, {
    movie: 'Bronie Białe',
    genre: '',
    country: 'Poland'
  }]

  const specificItemData = [
    {
    name: 'Halabarda'
  }, {
    name: 'Miecz Oburęczny'
  }, {
    name: 'Kusza'
  }];

  const objectCategory= [
    {name: 'Armors', category: 'armor'},{name: 'Melee weapons', category: 'melee'},{name: 'Ranged weapons', category: 'ranged'}
  ];

  const specificObject = [
    {name: 'chainmail', category: 'armor'},{name: 'plate mail', category: 'armor'},{name: 'leather brest plate', category: 'armor'},
    {name: 'sword', category: 'melee'},{name: 'halbeard', category: 'melee'},{name: 'pike', category: 'melee'},
    {name: 'bow', category: 'ranged'},{name: 'crossbow', category: 'ranged'},{name: 'slinger', category: 'ranged'}
  ];

  var randomIndex = 0;

  const itemsReadyToDraw = [{name: 'plate mail'}];
  const itemThatHasBeenDrawn = [{name: 'plate mail'}];
  const historyOfDrawnedItems = [];

  const [layoutChooseItems, setChooseItemsLayout] = useState(FCLLayout.OneColumn);
  const [layoutDrawItems, setDrawItemsLayout] = useState(FCLLayout.OneColumn);
  
  const [selectedMovie, setSelectedMovie] = useState(itemsCategoryData[0]);
  const [selectedCast, setSelectedCast] = useState(specificItemData[0]);

  const [selectedObjectCategory, setSelectedObjectCategory] = useState(objectCategory[0]);
  const [selectedSpecificObject, setSelectedspecificObject] = useState(specificObject[0]);

  const [selectedItemsReadyToDraw, setSelectedItemsReadyToDraw] = useState(itemsReadyToDraw)
  const [selectedItemThatHasBeenDrawn, setSelectedItemThatHasBeenDrawn] = useState(itemThatHasBeenDrawn)
  const [selectedHistoryOfDrawnedItems, setSelectedHistoryOfDrawnedItems] = useState(historyOfDrawnedItems)

  const onCategoryItemClick = e => {
    setSelectedObjectCategory(objectCategory.find(item => item.category === e.detail.item.dataset.category));
    setChooseItemsLayout(FCLLayout.TwoColumnsMidExpanded)
  };

  const onMiddleColumnClick = e => {
    setSelectedCast(specificItemData.find(item => item.name === e.detail.item.dataset.name));

    // setChooseItemsLayout(FCLLayout.ThreeColumnsEndExpanded);
    // setDrawItemsLayout(FCLLayout.ThreeColumnsEndExpanded);
  };
  return (
    <div className="App" >
      <ui5-shellbar
        primary-title="Random Loot Generator 3.0 for Warhammer 2ed."
        secondary-title="author: Bartosz Dudek"
      >
      </ui5-shellbar>
      <Grid defaultSpan="XL12 L12 M12 S12" style={{ padding: 10, margin: 5 }} >
        <div data-layout-span="XL6 L6 M12 S12" data-layout-indent="XL0 L0 M0 S0">
        
        <ui5-card heading="Historia losowanych przedmiotów" class="medium">
        <ui5-button design="Negative"  onClick={()  => setSelectedHistoryOfDrawnedItems(selectedHistoryOfDrawnedItems.filter(item => item.name === 12345 ))}>Oczyść listę</ui5-button>
         <List style={{height: '300px'}} growing="Scroll">
         {selectedHistoryOfDrawnedItems.map(item => 
            <StandardListItem>
              {item.name}
            </StandardListItem>)}
         </List>
      </ui5-card>
      </div>
      <div data-layout-span="XL6 L6 M12 S12" data-layout-indent="XL0 L0 M0 S0">
        <p>Miejsce na detale wybranego przedmiotu</p>
      </div>

        <div data-layout-span="XL6 L6 M12 S12" data-layout-indent="XL0 L0 M0 S0">
          <FlexibleColumnLayout
            style={{
              height: '600px'
            }} 
            layout={layoutChooseItems} startColumn={<>
              <List headerText="Kategorie przedmiotów do losowania" onItemClick={onCategoryItemClick}>
              {/* <List headerText="Kategorie przedmiotów do losowania" onItemClick={() => {
                  setChooseItemsLayout(FCLLayout.TwoColumnsMidExpanded);
              }}> */}
                {objectCategory.map(item => <StandardListItem description={`Quantity:  ${objectCategory.length}`} data-name={item.name} data-category={item.category}>
                  {item.name}
                </StandardListItem>)}
              </List>
            </>} midColumn={<>
              <Toolbar design={ToolbarDesign.Solid}>
                
                <Title>{selectedObjectCategory.name}</Title>
                <ToolbarSpacer />
                <ui5-button design="Negative"  onClick={()  => setSelectedItemsReadyToDraw(selectedItemsReadyToDraw.filter(item => item.name === 12345 ))}>wybierz wszystkie (not implemented)</ui5-button>
                <ToolbarSpacer />
                <Button icon="decline" design={ButtonDesign.Transparent} onClick={() => {
                  setChooseItemsLayout(FCLLayout.OneColumn);
                }} />
                
              </Toolbar>
              <List id="itemsToDrawList" headerText="Przedmioty" mode="SingleSelect" onItemClick={(item) => {setSelectedItemsReadyToDraw([...selectedItemsReadyToDraw,{name: `${item.detail.item.dataset.name}`}]);console.log(item.detail.item.dataset.name)}}>
                {specificObject.filter(item => item.category === selectedObjectCategory.category).map(item => <StandardListItem data-name={item.name}>
                  {item.name}
                </StandardListItem>)}
              </List>
            </>}           
                endColumn={<>
                <Toolbar design={ToolbarDesign.Solid}>
                <Title>Miejsce na kontrolki losowania</Title>
                
                <ToolbarSpacer />
                <Button icon="decline" design={ButtonDesign.Transparent} onClick={() => {
                  setChooseItemsLayout(FCLLayout.OneColumn);
                }} />
              </Toolbar>      
                </>}/>
        </div>      
        <div data-layout-span="XL6 L6 M12 S12" data-layout-indent="XL0 L0 M0 S0">
          <FlexibleColumnLayout
            
            style={{
              height: '600px'
            }} 
            layout={layoutDrawItems}
            onLayoutChange={function noRefCheck() { }}
            
            startColumn={
              <div>
              <Toolbar design={ToolbarDesign.Solid}>
                <Title>Lista przedmiotów losowanych</Title>
                <ToolbarSpacer />
                <Button icon="add"  onClick={() => {
                  setDrawItemsLayout(FCLLayout.TwoColumnsMidExpanded);
                }} />
              </Toolbar>
              <ui5-button design="Positive" onClick={() => {
                setDrawItemsLayout(FCLLayout.TwoColumnsMidExpanded);
                randomIndex = Math.floor(Math.random() * (selectedItemsReadyToDraw.length));
                selectedItemsReadyToDraw.length > 0 ?
                setSelectedItemThatHasBeenDrawn(
                  [selectedItemsReadyToDraw[randomIndex]]
                )
                :  setSelectedItemThatHasBeenDrawn([]);
                setSelectedHistoryOfDrawnedItems([...selectedHistoryOfDrawnedItems,...selectedItemThatHasBeenDrawn])
              }} >Losuj przedmiot</ui5-button>
              <ui5-button design="Negative"  onClick={()  => setSelectedItemsReadyToDraw(selectedItemsReadyToDraw.filter(item => item.name === 12345 ))}>Oczyść listę</ui5-button>
                <List mode="None"  onItemClick={object => {setSelectedItemsReadyToDraw(selectedItemsReadyToDraw.filter(item => item.name !== object.detail.item.innerText))}}>
                {selectedItemsReadyToDraw.map(item => 
                <StandardListItem description="kliknij aby usunąć">
                  {item.name}
                </StandardListItem >)}
                </List>
              </div>}
            midColumn={<>
            <Toolbar design={ToolbarDesign.Solid}>
                <Title>Wylosowane Przedmioty</Title> 
               
                <ToolbarSpacer />
                <Button icon="decline" design={ButtonDesign.Transparent} onClick={() => {
                  setDrawItemsLayout(FCLLayout.OneColumn);
                }} />
              </Toolbar>
              <List>
              {selectedItemThatHasBeenDrawn.map(item => 
                <StandardListItem description="kliknij aby zobaczyć szczegóły">
                  {item.name}
                </StandardListItem >)}
              </List></>} Z
            style={{}}
            tooltip=""
          />
        </div>
      </Grid>
    </div>
  );
}

export default App;
