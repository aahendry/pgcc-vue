<template>
    <tr :class="status === 'edit' ? 'border-left border-primary' : ''">
      <td v-show="status === 'view'">{{ fixture.competition.name }}</td>
      <td v-show="status === 'view'">{{ fixture.when | short-date-time }}</td>
      <td v-show="status === 'view'">{{ isLeagueTableSeason ? fixture.team1.skip : fixture.team1OtherName }}</td>
      <td v-show="status === 'view'">{{ isLeagueTableSeason ? fixture.team2.skip : fixture.team2OtherName }}</td>
      <td v-show="status === 'view'">{{ fixture.shots1 }}-{{ fixture.shots2 }}</td>
      <td v-show="status === 'view'">{{ fixture.ends1 }}-{{ fixture.ends2 }}</td>
      <td v-show="status === 'view'">
        <b-button
        variant="success"
        @click="onUpdateClick">Update</b-button>
      </td>
      <td v-show="status === 'view'">
        <b-button
        variant="info"
        @click="onCopyClick">Copy</b-button>
      </td>
      <td v-show="status === 'view'">
        <b-button
        variant="danger"
        @click="onDeleteClick">Delete</b-button>
      </td>

      <td colspan="7" v-show="status === 'edit'">
        <div>

          <b-form-group
            :label-cols="2"
            breakpoint="md"
            horizontal
            label="When:"
            for="when">
            <datepicker
              id="when"
              minute-interval="5"
              v-model="formData.when"/>
          </b-form-group>

          <b-form-group
            :label-cols="2"
            breakpoint="md"
            horizontal
            label="Round:"
            for="round">
            <b-col :md="5">
              <b-input
                id="round"
                v-model="formData.round"
                maxlength="255" />
            </b-col>
          </b-form-group>

          <b-form-group
            :label-cols="2"
            breakpoint="md"
            horizontal
            label="Final?:"
            for="isFinal">
            <b-col :md="5">
              <b-form-checkbox
                id="isFinal"
                v-model="formData.isFinal"
                switch/>
            </b-col>
          </b-form-group>

          <b-form-group
            v-show="isLeagueTableSeason"
            :label-cols="2"
            breakpoint="md"
            horizontal
            label="Team 1:"
            for="team1">
            <b-form-select
              id="team1"
              v-model="formData.team1Id"
              :options="rinks">
            </b-form-select>
          </b-form-group>

          <b-form-group
            v-show="isLeagueTableSeason"
            :label-cols="2"
            breakpoint="md"
            horizontal
            label="Team 2:"
            for="team2">
            <b-form-select
              id="team2"
              v-model="formData.team2Id"
              :options="rinks">
            </b-form-select>
          </b-form-group>

          <b-form-group
            v-show="!(isLeagueTableSeason)"
            :label-cols="2"
            breakpoint="md"
            horizontal
            label="Team 1:"
            for="team1OtherName">
            <b-col :md="5">
              <b-input
                id="team1OtherName"
                v-model="formData.team1OtherName"
                maxlength="255"
                required />
            </b-col>
          </b-form-group>

          <b-form-group
            v-show="!(isLeagueTableSeason)"
            :label-cols="2"
            breakpoint="md"
            horizontal
            label="Team 2:"
            for="team2OtherName">
            <b-col :md="5">
              <b-input
                id="team2OtherName"
                v-model="formData.team2OtherName"
                maxlength="255"
                required />
            </b-col>
          </b-form-group>

          <b-form-group
            :label-cols="2"
            breakpoint="md"
            horizontal
            label="Shots 1:"
            for="shots1">
            <b-col :md="5">
              <b-input
                id="shots1"
                v-model="formData.shots1"
                maxlength="255"
                required />
            </b-col>
          </b-form-group>

          <b-form-group
            :label-cols="2"
            breakpoint="md"
            horizontal
            label="Shots 2:"
            for="shots2">
            <b-col :md="5">
              <b-input
                id="shots2"
                v-model="formData.shots2"
                maxlength="255"
                required />
            </b-col>
          </b-form-group>

          <b-form-group
            :label-cols="2"
            breakpoint="md"
            horizontal
            label="Ends 1:"
            for="ends1">
            <b-col :md="5">
              <b-input
                id="ends1"
                v-model="formData.ends1"
                maxlength="255"
                required />
            </b-col>
          </b-form-group>

          <b-form-group
            :label-cols="2"
            breakpoint="md"
            horizontal
            label="Ends 2:"
            for="ends2">
            <b-col :md="5">
              <b-input
                id="ends2"
                v-model="formData.ends2"
                maxlength="255"
                required />
            </b-col>
          </b-form-group>

          <b-form-group
            :label-cols="2"
            breakpoint="md"
            horizontal
            label="Man of the Match:"
            for="manOfTheMatch">
            <b-col :md="5">
              <b-input
                id="manOfTheMatch"
                v-model="formData.manOfTheMatch"
                maxlength="255"
                required />
            </b-col>
          </b-form-group>

        </div>
      </td>
      <td v-show="status === 'edit'">
        <b-button
        variant="success"
        @click="onSaveClick">Save</b-button>
      </td>
      <td v-show="status === 'edit'">
        <b-button
        variant="secondary"
        @click="onCancelClick">Cancel</b-button>
      </td>
    </tr>
</template>


<script>
import FixtureService from '@/services/fixture.service';
import RinkService from '@/services/rink.service';
import Datepicker from 'vue-ctk-date-time-picker';

export default {
  name: 'AdminFixtureRow',
  props: ['fixture', 'seasons'],
  components: {
    Datepicker
  },
  data() {
    return {
      formData: {
        id: null,
        when: null,
        round: null,
        isFinal: null,
        team1Id: null,
        team2Id: null,
        team1OtherName: null,
        team2OtherName: null,
        shots1: null,
        shots2: null,
        ends1: null,
        ends2: null,
        manOfTheMatch: null
      },
      status: 'view',
      isLeagueTableSeason: false,
      rinks: []
    };
  },
  created() {
    this.isLeagueTableSeason = this.fixture.competition.hasLeagueTable;
  },
  methods: {
    fetchRinks() {
      RinkService.getAll(this.fixture.competition.id, this.fixture.season.id).then((response) => {
        this.rinks = [];
        this.rinks.push({ text: 'Please Select:', value: null });
        response.data.forEach((element) => {
          this.rinks.push({ text: element.skip, value: element.id });
        });
      });
    },
    onUpdateClick() {
      this.status = 'edit';
      this.rinks = this.fetchRinks();

      this.formData.id = this.fixture.id;
      this.formData.when = this.fixture.when;
      this.formData.round = this.fixture.round;
      this.formData.isFinal = this.fixture.isFinal;
      this.formData.shots1 = this.fixture.shots1;
      this.formData.shots2 = this.fixture.shots2;
      this.formData.ends1 = this.fixture.ends1;
      this.formData.ends2 = this.fixture.ends2;
      this.formData.manOfTheMatch = this.fixture.manOfTheMatch;

      if (this.isLeagueTableSeason) {
        this.formData.team1Id = this.fixture.team1.id;
        this.formData.team2Id = this.fixture.team2.id;
      } else {
        this.formData.team1OtherName = this.fixture.team1OtherName;
        this.formData.team2OtherName = this.fixture.team2OtherName;
      }
    },
    onSaveClick() {
      FixtureService.update(this.fixture.id, this.formData).then(() => {
        this.status = 'view';
        this.$emit('update');
      }).catch(() => {
        // pop a toast mesage or something
      });
    },
    onCancelClick() {
      this.status = 'view';

      this.formData.id = this.fixture.id;
      this.formData.when = this.fixture.when;
      this.formData.round = this.fixture.round;
      this.formData.isFinal = this.fixture.isFinal;
      this.formData.shots1 = this.fixture.shots1;
      this.formData.shots2 = this.fixture.shots2;
      this.formData.ends1 = this.fixture.ends1;
      this.formData.ends2 = this.fixture.ends2;
      this.formData.manOfTheMatch = this.fixture.manOfTheMatch;

      if (this.isLeagueTableSeason) {
        this.formData.team1Id = this.fixture.team1.id;
        this.formData.team2Id = this.fixture.team2.id;
      } else {
        this.formData.team1OtherName = this.fixture.team1OtherName;
        this.formData.team2OtherName = this.fixture.team2OtherName;
      }
    },
    onDeleteClick() {
      this.$emit('delete', this.fixture.id);
    },
    onCopyClick() {
      this.$emit('copy', this.fixture.id);
    }
  }
};
</script>

<style>
.datepicker {
  top: auto !important;
  bottom: auto !important;
}
</style>
