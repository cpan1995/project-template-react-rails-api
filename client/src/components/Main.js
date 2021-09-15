import React from 'react';
import Tabs from './Tabs'
import Classes from './Classes'
import Students from './Students'
import Complaints from './Complaints'
import { NavLink, Switch, Route, useHistory } from "react-router-dom"
import { Divider, Grid, Image, Segment, Header } from "semantic-ui-react";

function Main(){
    let history = useHistory();
   
    return(
        <div>
            <Segment>
      <Grid columns={2}>
        <Grid.Column>
          <p>
            <Image
              href="http://i.qkme.me/3s5h07.jpg"
              src="https://media4.giphy.com/media/p3huvYkhQDvgXTJVoO/giphy.gif?cid=790b7611e1dbda9b2125046c80e2e18c49ad32e302980826&rid=giphy.gif&ct=g"
            />
          </p>
        </Grid.Column>

        <Grid.Column>
          <h1>School Canceled</h1>
          <a href="http://i.qkme.me/3s5h07.jpg">
            Mayor declares that school is canceled tommorow due to poor weather.
            The news came after weather reports indicated over six inches of
            snow in the area
          </a>
        </Grid.Column>
      </Grid>

      <Grid columns={2}>
        <Grid.Column>
          <p>
            <Image
              href="https://www.cnn.com/2019/05/29/world/janitor-lottery-win-trnd/index.html"
              src="https://media.cnn.com/api/v1/images/stellar/prod/190529104742-vito-halasan.jpg?q=x_2,y_0,h_898,w_1596,c_crop/h_720,w_1280"
            />
          </p>
        </Grid.Column>

        <Grid.Column>
          <h1>Custodial Quantum Engineer Vito wins lottery!</h1>
          <a href="https://www.cnn.com/2019/05/29/world/janitor-lottery-win-trnd/index.html">
            Congratulations to our very own Custodial Quantum Engineer Vito for
            winning the lottery!
          </a>
          <p></p>
          <a href="https://www.cnn.com/2019/05/29/world/janitor-lottery-win-trnd/index.html">
            Upon interview he was quoted as saying "up yours ya filthy
            peasants!"
          </a>
        </Grid.Column>
      </Grid>

      <Divider vertical></Divider>
    </Segment>
    <h1>Clubs</h1>
    <Segment>
      <Header as="h3">Chess:</Header>
      <a href="https://onlyfans.com/">
        The chess club has decreed that all current members should create an
        onlyfans account in order to show off their favorite mating positions
      </a>

      <Divider section />
    </Segment> 
                  
        </div>
    )
}

export default Main