<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <h3>Bicentenary</h3>
        <h4>1827 - 2027</h4>
      </b-col>
    </b-row>
    <br/>
    <b-row>
      <b-col>
        <p>Port Glasgow Curling Club, one of the oldest clubs in Scotland in continuous existance, celebrates its bicentenary in 2027.</p>
        <p>Please take some time to explore our Virtual Museum, which features a growing collection of artefacts and information about the club and the sport of curling.</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <a href="https://ehive.com/collections/206897/port-glasgow-curling-club" target="_blank" class="btn btn-primary">Virtual Museum</a>
      </b-col>
    </b-row>

    <br/>
    <hr/>

    <b-row>
      <b-col lg="4" md="12">
        <h3>Bicentenary Events</h3>
        <b-row>
          <b-col v-for="event in events" :key="event.id" sm="12">
            <b-card style="max-width: 40rem;" class="mb-2">
              <b-card-title title-tag="h5">{{event.what}}</b-card-title>
              <b-card-sub-title class="mb-2">{{event.when}}</b-card-sub-title>
              <b-card-text>
                <p>{{event.where}}</p>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-col>

      <b-col lg="8" md="12">
        <h3>Club History</h3>
        <p>Prepared for the Club’s Heritage Celebrations</p>
        <hr/>
        <h5>Origins and Early Ponds (1827–1896)</h5>
        <p>Founded in <strong>1827</strong>, the Club quickly became a cornerstone of local sporting life. Recognition followed in <strong>1840</strong> with admission to the <strong>Royal Club</strong>, affirming its growing stature. The latter 19th century was marked by steady development and relocation of facilities: a move from <strong>Harelaw Pond</strong> to <strong>New Pond (1877)</strong>, the erection of a <strong>pond house (1883)</strong>, and fencing of the pond in <strong>1885</strong>. By <strong>1896</strong>, the Club relocated once more, this time to <strong>Slaemuir Pond</strong>, closing a formative chapter.</p>
        <br/>
        <h5>Growth, Challenge, and Change (1902–1937)</h5>
        <p>The early 20th century brought prominence and pressure. The Club took part in the <strong>Royal Club Bonspiel at Carsebreck (1902)</strong>, while <strong>Crossmyloof opened in 1907</strong>, offering new opportunities. Not all ambitions succeeded—the <strong>tarmac rink proposal failed in 1911</strong>—and <strong>Crossmyloof closed in 1918</strong>. Despite these challenges, the Club celebrated its <strong>Centenary in 1927</strong>. Reopening at Crossmyloof in <strong>1928</strong> was followed by administrative and local challenges, including <strong>farmers’ complaints (1929)</strong> and <strong>factors’ correspondence (1933)</strong>. By 1937 the club had moved from <strong>Slaemuir Pond</strong> to <strong>Devol</strong>.</p>
        <br/>
        <h5>Post-War Stability and Milestones (1953–1986)</h5>
        <p>Post-war years saw consolidation and memorable events. The <strong>old pond hut moved to Dougliehill (1953)</strong>, and the Club participated in the <strong>Grand Match at Lake of Monteith (1963)</strong>. <strong>Greenacres opened in 1975</strong>, shortly before the <strong>150th Anniversary in 1977</strong>. Another <strong>Grand Match at Lake of Monteith</strong> followed in <strong>1979</strong>, while <strong>weekends at Forrest Hills (from 1984)</strong> became a valued tradition. This era closed with the <strong>final closure of Crossmyloof in 1986</strong>.</p>
        <br/>
        <h5>The Indoor Era and Modern Celebrations (1993–2027)</h5>
        <p>A new chapter began with the <strong>start of indoor curling’s ‘Golden Age’ in 1993</strong>. The <strong>Waterfront opened in 1997</strong>, and the Club embraced indoor play with <strong>Grand Matches in 2000, 2005, 2010, 2015, and 2025</strong>. Major anniversaries punctuated this period: <strong>175th (2002)</strong>, <strong>185th (2012)</strong>, and <strong>190th (2017)</strong>. The Club’s <strong>last weekend at Forrest Hills took place in 2004</strong>, before its closure in <strong>2006</strong>. The story reaches a landmark moment with the <strong>Club’s Bicentenary in 2027</strong>, celebrating two centuries of curling heritage.</p>
        <!-- <div class="timeline">
          <div  v-for="entry in history" :key="entry.id">
            <div class="timeline-container" v-bind:class="{ left: entry.id%2!==0 , right: entry.id%2==0}">
              <div class="timeline-content">
                <h4>{{entry.year}}</h4>
                <p>{{entry.detail}}</p>
              </div>
            </div>
          </div>
        </div> -->
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: 'Bicentenary',
  data() {
    return {
      events: [],
      history: []
    };
  },
  created() {
    this.events = [
      { id: 1, what: 'Anniversary Curlers\' Court', when: 'Friday 23rd October 2026', where: '175 Club' },
      { id: 2, what: 'Civic Reception', when: 'w/c 25th January 2027', where: 'TBC' },
      { id: 3, what: 'Celebration Dinner', when: 'Friday 19th February 2027', where: 'Tontine Hotel' },
      { id: 4, what: 'Ye Olde Game of Curling Bonspiel', when: 'w/c 1st February 2027', where: 'TBC' },
      { id: 5, what: 'Invitational Bonspiel', when: 'Saturday 9th October 2027', where: 'Waterfront' },
      { id: 6, what: 'Ceilidh', when: 'Saturday 27th November 2027', where: 'Tontine Hotel' }
    ];
    this.history = [
      { id: 1, year: '1827', detail: 'Club founded' },
      { id: 2, year: '1840', detail: 'Admitted into the Grand Caledonian Curling Club' },
      { id: 3, year: '1877', detail: 'Club property moved from Harelaw Pond to New Pond' },
      { id: 4, year: '1883', detail: 'House erected at New Pond' },
      { id: 5, year: '1885', detail: 'Fence placed around New Pond' },
      { id: 6, year: '1896', detail: 'Move to Slaemuir Pond' },
      { id: 7, year: '1897', detail: 'Match against Lilybank at Glasgow Real Ice Co.’s Skating Palace, Sauchiehall St, Glasgow' },
      { id: 8, year: '1902', detail: 'Royal Caledonian Curling Club bonspiel at Carsebreck' },
      { id: 9, year: '1907', detail: 'Crossmyloof ice rink opens' },
      { id: 10, year: '1907', detail: 'Tarmac rink proposal fails' },
      { id: 11, year: '1918', detail: 'Crossmyloof ice rink closes' },
      { id: 12, year: '1927', detail: 'Club centenary' },
      { id: 13, year: '1928', detail: 'Crossmyloof ice rink reopens' },
      { id: 14, year: '1929', detail: 'Farmers complaint received' },
      { id: 15, year: '1933', detail: 'Factors letter received' },
      { id: 16, year: '1935', detail: 'Slaemuir clubhouse move' },
      { id: 17, year: '1937', detail: 'Club moves to Devol' },
      { id: 18, year: '1953', detail: 'Old Pond hut moves to Dougliehill' },
      { id: 19, year: '1963', detail: 'Grand Match played at Lake of Menteith' },
      { id: 20, year: '1975', detail: 'Greenacres curling rink opens' },
      { id: 21, year: '1977', detail: 'Club 150th anniversary' },
      { id: 22, year: '1979', detail: 'Grand Match played at Lake of Menteith' },
      { id: 23, year: '1984', detail: 'Club weekend at Forest Hills' },
      { id: 24, year: '1986', detail: 'Crossmyloof ice rink closes' },
      { id: 25, year: '1993', detail: 'Start of indoor curling "golden age"' },
      { id: 26, year: '1997', detail: 'Greenock Waterfront ice rink opens' },
      { id: 27, year: '2000', detail: 'Indoor grand match played' },
      { id: 28, year: '2002', detail: 'Club\'s 175th anniversary' },
      { id: 29, year: '2004', detail: 'Last club weekend at Forest Hills' },
      { id: 30, year: '2005', detail: 'Indoor grand match played' },
      { id: 31, year: '2006', detail: 'Forest Hills ice rink closes' },
      { id: 32, year: '2010', detail: 'Indoor grand match played' },
      { id: 33, year: '2012', detail: 'Club\'s 185th anniversary' },
      { id: 34, year: '2015', detail: 'Indoor grand match played' },
      { id: 35, year: '2017', detail: 'Club\'s 190th anniversary' },
      { id: 36, year: '2025', detail: 'Indoor grand match played' },
      { id: 37, year: '2027', detail: 'Club bicentenary' }
    ];
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: rgb(212, 212, 212);
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.timeline-container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.timeline-container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -12px;
  background-color: rgb(212, 212, 212);
  border: 4px solid #345471;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 0;
}

/* Place the container to the right */
.right {
  left: 50%;
}

/* Add arrows to the left container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid rgb(212, 212, 212);
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent rgb(212, 212, 212);
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid rgb(212, 212, 212);
  border-width: 10px 10px 10px 0;
  border-color: transparent rgb(212, 212, 212) transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -12px;
}

/* The actual content */
.timeline-content {
  padding: 10px 30px;
  background-color: rgb(212, 212, 212);
  position: relative;
  border-radius: 6px;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
/* Place the timelime to the left */
  .timeline::after {
    left: 31px;
  }

/* Full-width containers */
  .timeline-container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

/* Make sure that all arrows are pointing leftwards */
  .timeline-container::before {
    left: 60px;
    border: medium solid rgb(212, 212, 212);
    border-width: 10px 10px 10px 0;
    border-color: transparent rgb(212, 212, 212) transparent transparent;
  }

/* Make sure all circles are at the same spot */
  .left::after, .right::after {
    left: 15px;
  }

/* Make all right containers behave like the left ones */
  .right {
    left: 0%;
  }
}
</style>
