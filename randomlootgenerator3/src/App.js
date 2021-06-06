import React, { useState } from 'react';
import { FlexibleColumnLayout, List, StandardListItem,  Title,  Grid, FCLLayout, Toolbar,  ToolbarSpacer, Button, ButtonDesign } from '@ui5/webcomponents-react';
import  { melee, ranged, armor, clothes } from './itemsVault';
import "@ui5/webcomponents/dist/Assets.js";
import "@ui5/webcomponents-fiori/dist/Assets.js"; //  if you use @ui5/webcomponents-fiori
import './App.css';
import {
  armorImg,
  meleeImg,
  rangedImg,
  clothesImg
} from './img'


function App() {

  const objectCategory= [
    {name: 'Armors', category: 'armor', image:armorImg},{name: 'Melee weapons', category: 'melee', image:meleeImg},{name: 'Ranged weapons', category: 'ranged', image:rangedImg}, {name: 'Clothes', category: 'clothes', image:clothesImg}
  ];

  const mockChoosenObject=melee[0];

  // merge all arrays with items into one.
  const specificObject = melee.concat(ranged,armor,clothes);

  const itemsReadyToDraw = [melee[0],melee[1],melee[2],melee[3]];
  const itemThatHasBeenDrawn = [melee[0],melee[1],melee[2],melee[3]];
  const historyOfDrawnedItems = [];
  const [ChoosenObject, setChoosenObject] = useState(mockChoosenObject)
  const [layoutHistoryOfDrawnItems, setHistoryOfDrawnItemsLayout] = useState(FCLLayout.OneColumn);
  const [layoutChooseItems, setChooseItemsLayout] = useState(FCLLayout.OneColumn);
  const [layoutDrawItems, setDrawItemsLayout] = useState(FCLLayout.OneColumn);
  const [selectedObjectCategory, setSelectedObjectCategory] = useState(objectCategory[0]);
  const [selectedItemsReadyToDraw, setSelectedItemsReadyToDraw] = useState(itemsReadyToDraw)
  const [selectedItemThatHasBeenDrawn, setSelectedItemThatHasBeenDrawn] = useState(itemThatHasBeenDrawn)
  const [selectedHistoryOfDrawnedItems, setSelectedHistoryOfDrawnedItems] = useState(historyOfDrawnedItems)
  const [quantityOfRolls, setQuantityOfRolls] = useState(1)

  const onCategoryItemClick = e => {
    setSelectedObjectCategory(objectCategory.find(item => item.category === e.detail.item.dataset.category));
    setChooseItemsLayout(FCLLayout.TwoColumnsMidExpanded)
  };
 
  const  changeInQuanitytOfRolls = e => setQuantityOfRolls(e.target.value)
  
  return (
    <div className="App" >
      <ui5-shellbar
        primary-title="Random Loot Generator 3.0 for Warhammer 2ed."
        secondary-title="author: Bartosz Dudek"
      ></ui5-shellbar>
      <Grid className="appBackground" defaultSpan="XL12 L12 M12 S12" style={{ padding: 10 }}>
        <div data-layout-span="XL6 L6 M12 S12" data-layout-indent="XL0 L0 M0 S0">
        <FlexibleColumnLayout className='divsBacckground'
            
            style={{
              height: '600px'
            }} 
            layout={layoutDrawItems}
            onLayoutChange={function noRefCheck() { }}
            
            startColumn={
              <div>
              <Toolbar>
                <Title  className='titleDescriptor'>Lista przedmiotów losowanych</Title>
              </Toolbar>
              <button className="actionButton buttonRollDiece" design="Positive" onClick={() => {
                setSelectedItemThatHasBeenDrawn([]);
                const drawingItems = []
                if (selectedItemsReadyToDraw.length > 0){
                  for (let i = 0; i < quantityOfRolls ; i +=1){
                    drawingItems.push(selectedItemsReadyToDraw[Math.floor(Math.random() * (selectedItemsReadyToDraw.length))])
                  }
                  setSelectedItemThatHasBeenDrawn([...drawingItems])
                }
                else{ setSelectedItemThatHasBeenDrawn([])};
                setSelectedHistoryOfDrawnedItems([...selectedHistoryOfDrawnedItems,...selectedItemThatHasBeenDrawn])
              }}>
                <span className='buttonText'>Losuj przedmiot</span><br/>
                <input
                  className="slider"
                  type="range"
                  min="1"
                  max="10"
                  value={quantityOfRolls}
                  onChange={changeInQuanitytOfRolls}
                />
                <span class='buttonText'>liczba losowań: {quantityOfRolls}</span>
              </button>
              <button className="actionButton buttonRemove"  onClick={()  => setSelectedItemsReadyToDraw(selectedItemsReadyToDraw.filter(item => item.name === 12345 ))}>
              <span className='buttonText'>Oczyść listę</span>
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
      <div className='divsBacckground' data-layout-span="XL6 L6 M12 S12" data-layout-indent="XL0 L0 M0 S0">
      <FlexibleColumnLayout className='divsBacckground'
        style={{
          height: '600px'
        }} 
        layout={FCLLayout.OneColumn} 
        startColumn={<> 
        <Toolbar>
          <Title className='titleDescriptor'>Informacje o wybranym przedmiocie</Title> 
        </Toolbar>
        <ui5-list  mode="None" separators="None"  style={{height: '500px'}} growing="Scroll">
          {Object.entries(ChoosenObject).map(value => <ui5-li type="Inactive"><span className='itemPropDescriptor'>{value[0].toUpperCase()}</span> : { value[1].charAt(0) === "/" ? <ui5-avatar image={ChoosenObject.image} ></ui5-avatar> : <span className='itemPropName'>{value[1]}</span>}</ui5-li>)}
        </ui5-list>

        </>} 
        />
      </div>
        <div data-layout-span="XL6 L6 M12 S12" data-layout-indent="XL0 L0 M0 S0">
          <FlexibleColumnLayout className='divsBacckground'
            style={{
              height: '600px'
            }} 
            layout={layoutChooseItems} startColumn={<>
              <Toolbar>
              <Title className='titleDescriptor'>Kategorie przedmiotów do losowania</Title>
               </Toolbar>
              <List onItemClick={onCategoryItemClick}>
                {objectCategory.map(item => 
                  <StandardListItem description={`Quantity:  ${specificObject.filter(x => x.category === item.category).length}`} data-name={item.name} image={item.image} data-category={item.category}>
                    <span className='itemPropName'>{item.name}</span>
                  </StandardListItem>)}
              </List>
            </>} 
            midColumn={<>
              <Toolbar>
                <Title className='titleDescriptor'>{selectedObjectCategory.name}</Title>
                <ToolbarSpacer />
                <Button icon="decline" design={ButtonDesign.Transparent} onClick={() => 
                  {setChooseItemsLayout(FCLLayout.OneColumn)}}
                />
              </Toolbar>
              <List id="itemsToDrawList" mode="SingleSelect" onItemClick={(item) => setSelectedItemsReadyToDraw([...selectedItemsReadyToDraw,{name: `${item.detail.item.dataset.name}`}])}>
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
        <FlexibleColumnLayout className='divsBacckground'
              style={{
                height: '600px'
              }} 
              layout={layoutHistoryOfDrawnItems} 
              startColumn={<> 
                <Toolbar>
                <Title className='titleDescriptor'>Obecnie wylosowane przedmioty</Title> 
                <ToolbarSpacer/>
                <Button icon="add" design={ButtonDesign.Transparent} onClick={() => {
                   setHistoryOfDrawnItemsLayout(FCLLayout.TwoColumnsMidExpanded);
                }}/>
                </Toolbar>
                <List style={{height: '600px'}} growing="Scroll">
                  {selectedItemThatHasBeenDrawn.map(item => 
                    <StandardListItem description="kliknij aby zobaczyć szczegóły" onClick={() => setChoosenObject(specificObject.filter(x => x.name === item.name)[0])}> 
                      <p className='itemName drawnItem'>{item.name}</p>
                    </StandardListItem >
                  )}
                </List>
              </>} 
              midColumn={<>
                <Toolbar>
                <Title className='titleDescriptor'>Historia Wylosowanych Przedmiotów</Title> 
                <ToolbarSpacer/>
                <button className="actionButton buttonRemove" onClick={() => setSelectedHistoryOfDrawnedItems(selectedHistoryOfDrawnedItems.filter(item => item.name === 12345 ))}>
                <span className='buttonText'> Oczyść listę</span>
                </button>
                <Button icon="decline" design={ButtonDesign.Transparent} onClick={() => {
                  setHistoryOfDrawnItemsLayout(FCLLayout.OneColumn);
                }}/>
                </Toolbar>
                <List style={{height: '600px'}} growing="Scroll">
                  {selectedHistoryOfDrawnedItems.map(item => 
                    <StandardListItem description="kliknij aby zobaczyć szczegóły" onClick={() => setChoosenObject(specificObject.filter(x => x.name === item.name)[0])}>
                      <p className='itemNameHistoryItem'>{item.name}</p>
                      
                    </StandardListItem>)}
                </List>
              </>}           
          />
        </div>
      </Grid>
    </div>
  );
}

export default App;
