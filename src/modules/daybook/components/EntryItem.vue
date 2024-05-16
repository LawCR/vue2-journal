<template>
  <div 
    class="entry-container mb-3 pointer py-2 px-3" 
    @click="$router.push({ name: 'entry', params: { id: entry.id } })"
  >
    <div class="entry-title d-flex align-items-center">
      <span class="fw-medium mb-1">{{fullDate}}</span>
    </div>

    <div class="entry-description ">
      <p class="mb-1">{{ shortDescription }}</p>
    </div>
  </div>
</template>

<script>

  
  export default {
    props: {
      entry: {
        type: Object,
        required: true
      }
    },
    computed: {
      shortDescription() {
        return this.entry.text.length > 200 ? `${this.entry.text.substr(0, 200).trim()}...` : this.entry.text;
      },
      day() {
        const date = new Date(this.entry.date);
        return date.getDate()
      },
      month() {
        const date = new Date(this.entry.date);
        const month = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(date);
        return month[0].toUpperCase() + month.slice(1);
      },
      year() {
        const date = new Date(this.entry.date);
        return date.getFullYear();
      },
      hhmm() {
        const date = new Date(this.entry.date);
        return date.getHours() + ':' + date.getMinutes();
      },
      fullDate() {
        const date = this.day + ' ' + this.month + ' ' + this.year + ', ' + this.hhmm;
        return date;
      },
      nameDay() {
        const date = new Date(this.entry.date);
        const day = new Intl.DateTimeFormat('es-ES', { weekday: 'long' }).format(date);
        return day[0].toUpperCase() + day.slice(1);
      }
    }
  }
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #ccc;
  background-color: #f9f9f9;
  border-radius: 10px;
  transition: all 0.2s ease-in;
  height: 85px;

  &:hover {
    background-color: lighten($color: grey, $amount: 45)
  }
}

.entry-description {
  font-size: 12px;
  color: #333;

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>