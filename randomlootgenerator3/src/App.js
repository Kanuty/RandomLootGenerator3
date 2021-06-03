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

  const mockChoosenObject={name:"Potion of Healing", cost:'10gp', description:'heal fo 1d10', category:'potion',a:1,b:2,c:3,d:4,e:5}

  const specificObject = [
    {name: 'chainmail', category: 'armor'},{name: 'plate mail', category: 'armor'},{name: 'leather brest plate', category: 'armor'},
    {name: 'sword', category: 'melee'},{name: 'halbeard', category: 'melee'},{name: 'pike', category: 'melee'},
    {name: 'bow', category: 'ranged'},{name: 'crossbow', category: 'ranged'},{name: 'slinger', category: 'ranged'}
  ];

  var randomIndex = 0;

  const itemsReadyToDraw = [{name: 'plate mail'}];
  const itemThatHasBeenDrawn = [{name: 'plate mail'}];
  const historyOfDrawnedItems = [];

  const [ChoosenObject, setChoosenObject] = useState(mockChoosenObject)

  const [layoutHistoryOfDrawnItems, setHistoryOfDrawnItemsLayout] = useState(FCLLayout.OneColumn);
  const [layoutChooseItems, setChooseItemsLayout] = useState(FCLLayout.OneColumn);
  const [layoutDrawItems, setDrawItemsLayout] = useState(FCLLayout.OneColumn);
  
 
  const [selectedObjectCategory, setSelectedObjectCategory] = useState(objectCategory[0]);
  const [selectedSpecificObject, setSelectedspecificObject] = useState(specificObject[0]);

  const [selectedItemsReadyToDraw, setSelectedItemsReadyToDraw] = useState(itemsReadyToDraw)
  const [selectedItemThatHasBeenDrawn, setSelectedItemThatHasBeenDrawn] = useState(itemThatHasBeenDrawn)
  const [selectedHistoryOfDrawnedItems, setSelectedHistoryOfDrawnedItems] = useState(historyOfDrawnedItems)

  const onCategoryItemClick = e => {
    setSelectedObjectCategory(objectCategory.find(item => item.category === e.detail.item.dataset.category));
    setChooseItemsLayout(FCLLayout.TwoColumnsMidExpanded)
  };

  
  return (
    <div className="App" >
      <ui5-shellbar
        primary-title="Random Loot Generator 3.0 for Warhammer 2ed."
        secondary-title="author: Bartosz Dudek"
      ></ui5-shellbar>
      <Grid defaultSpan="XL12 L12 M12 S12" style={{ padding: 10, margin: 5 }}>
        <div data-layout-span="XL6 L6 M12 S12" data-layout-indent="XL0 L0 M0 S0">
          <FlexibleColumnLayout
              style={{
                height: '600px'
              }} 
              layout={layoutHistoryOfDrawnItems} 
              startColumn={<>
                <Toolbar design={ToolbarDesign.Solid}>
                <Title>Obecnie wylosowane przedmioty</Title> 
                <ToolbarSpacer/>
                <Button icon="add" design={ButtonDesign.Transparent} onClick={() => {
                   setHistoryOfDrawnItemsLayout(FCLLayout.TwoColumnsMidExpanded);
                }}/>
                </Toolbar>
                <List style={{height: '400px'}} growing="Scroll">
                  {selectedItemThatHasBeenDrawn.map(item => 
                    <StandardListItem description="kliknij aby zobaczyć szczegóły" onClick={() => setChoosenObject(specificObject.filter(x => x.name === item.name)[0])}> 
                      {item.name}
                    </StandardListItem >
                  )}
                </List>
              </>} 
              midColumn={<>
                <Toolbar design={ToolbarDesign.Solid}>
                <Title>Historia Wylosowanych Przedmiotów</Title> 
                <ToolbarSpacer/>
                <ui5-button design="Negative" onClick={() => setSelectedHistoryOfDrawnedItems(selectedHistoryOfDrawnedItems.filter(item => item.name === 12345 ))}>
                  Oczyść listę
                </ui5-button>
                <Button icon="decline" design={ButtonDesign.Transparent} onClick={() => {
                  setHistoryOfDrawnItemsLayout(FCLLayout.OneColumn);
                }}/>
                </Toolbar>
                <List style={{height: '400px'}} growing="Scroll">
                  {selectedHistoryOfDrawnedItems.map(item => 
                    <StandardListItem description="kliknij aby zobaczyć szczegóły" onClick={() => setChoosenObject(specificObject.filter(x => x.name === item.name)[0])}>
                      {item.name}
                    </StandardListItem>)}
                </List>
                </>}           
            />
      </div>
      <div data-layout-span="XL6 L6 M12 S12" data-layout-indent="XL0 L0 M0 S0">
        <ui5-card  heading="Informacje o wybranych przedmiocie" subheading={ChoosenObject.name} className="medium">
      	  <div class="card-content">
            <ui5-list mode="None" separators="None" className="card-content-child"  style={{height: '500px'}} growing="Scroll">
              {Object.entries(ChoosenObject).map(value => <ui5-li type="Inactive" infoState="Success" description={value[0]} info={value[1]}></ui5-li>)}
            </ui5-list>
          </div>
        </ui5-card>
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
                {/* <ui5-button design="Negative"  onClick={()  => setSelectedItemsReadyToDraw(selectedItemsReadyToDraw.filter(item => item.name === 12345 ))}>
                  wybierz wszystkie
                </ui5-button> */}
                <ToolbarSpacer />
                <Button icon="decline" design={ButtonDesign.Transparent} onClick={() => {
                  setChooseItemsLayout(FCLLayout.OneColumn);
                }} />
                
              </Toolbar>
              <List id="itemsToDrawList" headerText="Przedmioty" mode="SingleSelect" onItemClick={(item) => {setSelectedItemsReadyToDraw([...selectedItemsReadyToDraw,{name: `${item.detail.item.dataset.name}`}]);console.log(item.detail.item.dataset.name, selectedItemsReadyToDraw)}}>
                {specificObject.filter(item => item.category === selectedObjectCategory.category).map(item => 
                <StandardListItem data-name={item.name}>
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
                <ToolbarSpacer/>
                <Button icon="add" design={ButtonDesign.Transparent} onClick={() => {
                  setDrawItemsLayout(FCLLayout.TwoColumnsMidExpanded);
                }}/>
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
              }}>
              Losuj przedmiot
              </ui5-button>
              <ui5-button design="Negative"  onClick={()  => setSelectedItemsReadyToDraw(selectedItemsReadyToDraw.filter(item => item.name === 12345 ))}>
                Oczyść listę
              </ui5-button>
              <List mode="None" onItemClick={object => {setSelectedItemsReadyToDraw(selectedItemsReadyToDraw.filter(item => item.name !== object.detail.item.innerText))}}>
                {selectedItemsReadyToDraw.map(item => 
                <StandardListItem description="kliknij aby usunąć">
                  {item.name}
                </StandardListItem >)}
                </List>
              </div>}
            midColumn={<></>}
          />
        </div>
      </Grid>
    </div>
  );
}

export default App;
