import React, { useState } from 'react';
import { FlexibleColumnLayout, List, StandardListItem,  Title,  Grid, FCLLayout, Toolbar,  ToolbarSpacer, Button, ButtonDesign } from '@ui5/webcomponents-react';
// import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme';
import  { melee, ranged, armor, clothes } from './itemsVault';
import "@ui5/webcomponents/dist/Assets.js";
import "@ui5/webcomponents-fiori/dist/Assets.js"; //  if you use @ui5/webcomponents-fiori
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";
import './App.css';
import {
  armorImg,
  meleeImg,
  rangedImg,
  clothesImg
} from './img'


function App() {

  // setTheme("sap_belize");
  // setTheme("sap_belize_hcb");
  // setTheme("sap_belize_hcw");
  // setTheme("sap_fiori_3");
  // setTheme("sap_fiori_dark");

  const objectCategory= [
    {name: 'Armors', category: 'armor', image:armorImg},{name: 'Melee weapons', category: 'melee', image:meleeImg},{name: 'Ranged weapons', category: 'ranged', image:rangedImg}, {name: 'Clothes', category: 'clothes', image:clothesImg}
  ];

  const mockChoosenObject=melee[0];

  // merge all arrays with items into one.
  const specificObject = melee.concat(ranged,armor,clothes);

  var randomIndex = 0;

  const itemsReadyToDraw = [melee[0]];
  const itemThatHasBeenDrawn = [melee[0]];
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
          <FlexibleColumnLayout className='oldBackground'
              style={{
                height: '600px'
              }} 
              layout={layoutHistoryOfDrawnItems} 
              startColumn={<> 
                <Toolbar>
                <Title className='oldBackground'>Obecnie wylosowane przedmioty</Title> 
                <ToolbarSpacer/>
                <Button icon="add" design={ButtonDesign.Transparent} onClick={() => {
                   setHistoryOfDrawnItemsLayout(FCLLayout.TwoColumnsMidExpanded);
                }}/>
                </Toolbar>
                <List style={{height: '400px'}} growing="Scroll">
                  {selectedItemThatHasBeenDrawn.map(item => 
                    <StandardListItem description="kliknij aby zobaczyć szczegóły" onClick={() => setChoosenObject(specificObject.filter(x => x.name === item.name)[0])}> 
                      <p className='itemName drawnItem'>{item.name}</p>
                    </StandardListItem >
                  )}
                </List>
              </>} 
              midColumn={<>
                <Toolbar>
                <Title>Historia Wylosowanych Przedmiotów</Title> 
                <ToolbarSpacer/>
                <button className="actionButton buttonRemove" onClick={() => setSelectedHistoryOfDrawnedItems(selectedHistoryOfDrawnedItems.filter(item => item.name === 12345 ))}>
                  Oczyść listę
                </button>
                <Button icon="decline" design={ButtonDesign.Transparent} onClick={() => {
                  setHistoryOfDrawnItemsLayout(FCLLayout.OneColumn);
                }}/>
                </Toolbar>
                <List style={{height: '400px'}} growing="Scroll">
                  {selectedHistoryOfDrawnedItems.map(item => 
                    <StandardListItem description="kliknij aby zobaczyć szczegóły" onClick={() => setChoosenObject(specificObject.filter(x => x.name === item.name)[0])}>
                      <p className='itemNameHistoryItem'>{item.name}</p>
                      
                    </StandardListItem>)}
                </List>
                </>}           
            />
      </div>
      <div className='oldBackground' data-layout-span="XL6 L6 M12 S12" data-layout-indent="XL0 L0 M0 S0">
        <ui5-card className='oldBackground' heading="Informacje o wybranym przedmiocie"  subheading={ChoosenObject.name.toUpperCase()}>
        
      	  <div className='oldBackground'>
            <ui5-list  mode="None" separators="None"  style={{height: '500px'}} growing="Scroll">
              {Object.entries(ChoosenObject).map(value => <ui5-li type="Inactive"><span className='itemPropDescriptor'>{value[0].toUpperCase()}</span> : { value[1].charAt(0) === "/" ? <ui5-avatar image={ChoosenObject.image} ></ui5-avatar> : <span className='itemPropName'>{value[1]}</span>}</ui5-li>)}
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
              <List headerText="Kategorie przedmiotów do losowania"  onItemClick={onCategoryItemClick}>
              {/* <List headerText="Kategorie przedmiotów do losowania" onItemClick={() => {
                  setChooseItemsLayout(FCLLayout.TwoColumnsMidExpanded);
              }}> */}
                {objectCategory.map(item => <StandardListItem description={`Quantity:  ${specificObject.filter(x => x.category === item.category).length}`} data-name={item.name} image={item.image} data-category={item.category}>
                  {item.name}
                 
                </StandardListItem>)}
              </List>
            </>} midColumn={<>
              <Toolbar>
                
                <Title>{selectedObjectCategory.name}</Title>
                <ToolbarSpacer />

                <Button icon="decline" design={ButtonDesign.Transparent} onClick={() => {
                  setChooseItemsLayout(FCLLayout.OneColumn);
                }} />
                
              </Toolbar>
              <List id="itemsToDrawList" headerText="Przedmioty" mode="SingleSelect" onItemClick={(item) => setSelectedItemsReadyToDraw([...selectedItemsReadyToDraw,{name: `${item.detail.item.dataset.name}`}])}>
                {specificObject.filter(item => item.category === selectedObjectCategory.category).map(item => 
                <StandardListItem data-name={item.name} image={item.image}>
                  {item.name.toUpperCase()}
                  
                </StandardListItem>)}
              </List>
            </>}           
                endColumn={<>
                <Toolbar>
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
              <Toolbar>
                <Title>Lista przedmiotów losowanych</Title>
              </Toolbar>
              <button className="actionButton buttonRollDiece" design="Positive" onClick={() => {
                randomIndex = Math.floor(Math.random() * (selectedItemsReadyToDraw.length));
                selectedItemsReadyToDraw.length > 0 ?
                setSelectedItemThatHasBeenDrawn(
                  [selectedItemsReadyToDraw[randomIndex]]
                )
                :  setSelectedItemThatHasBeenDrawn([]);
                setSelectedHistoryOfDrawnedItems([...selectedHistoryOfDrawnedItems,...selectedItemThatHasBeenDrawn])
              }}>
              Losuj przedmiot
              </button>
              <button className="actionButton buttonRemove"  onClick={()  => setSelectedItemsReadyToDraw(selectedItemsReadyToDraw.filter(item => item.name === 12345 ))}>
                Oczyść listę
              </button>
              <List mode="None" onItemClick={object => { console.log(object, selectedItemsReadyToDraw); setSelectedItemsReadyToDraw(selectedItemsReadyToDraw.filter(item => item.name !== object.detail.item.innerText))}}>
                {selectedItemsReadyToDraw.map(item => 
                <StandardListItem description="kliknij aby usunąć">
                   {/* currently, displayed text should not by modified. If, for example, it would be UpperCased (even if only first letter), function that is responsible for removing this particular object from list, won't work. */}
                  <p className='itemName'>{item.name}</p>
                </StandardListItem >)}
                </List>
              </div>}
           
          />
        </div>
      </Grid>
    </div>
  );
}

export default App;
