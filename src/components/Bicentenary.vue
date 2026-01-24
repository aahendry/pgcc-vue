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
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: 'Bicentenary',
  data() {
    return {
      events: []
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
  }
};
</script>
