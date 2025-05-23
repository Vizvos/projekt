<template>
  <v-footer class="footer" padless>
    <v-container class="py-8">
      <v-row justify="space-between">
        <v-col cols="12" md="3">
          <h4 class="text-uppercase text-subtitle-1 font-weight-bold">Profile</h4>
          <v-list density="compact" nav>
            <v-list-item v-for="item in profileLinks" :key="item.text" :title="item.text" link />
          </v-list>
        </v-col>

        <v-col cols="12" md="3">
          <h4 class="text-uppercase text-subtitle-1 font-weight-bold">Recent Posts</h4>
          <v-list density="compact" nav>
            <v-list-item v-for="item in recentPosts" :key="item.text" :title="item.text" link />
          </v-list>
        </v-col>

        <v-col cols="12" md="3">
          <h4 class="text-uppercase text-subtitle-1 font-weight-bold">Customer</h4>
          <v-list density="compact" nav>
            <v-list-item v-for="item in customerLinks" :key="item.text" :title="item.text" link />
          </v-list>
        </v-col>

        <v-col cols="12" md="3">
          <h4 class="text-uppercase text-subtitle-1 font-weight-bold">Contact</h4>
          <v-list density="compact" nav>
            <v-list-item title="—" />
          </v-list>
        </v-col>
      </v-row>

      <v-divider class="my-4" />

      <v-row justify="center">
        <span class="text-caption text-grey-lighten-1">
          © 2025 MovieBase. All Rights Reserved
        </span>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
const profileLinks = [
  { text: "FAQ’s" },
  { text: "Pricing plans" },
  { text: "Order tracking" },
  { text: "Returns" },
]

const recentPosts = [
  { text: "Touch of uniqueness" },
  { text: "Offices you won’t forget" },
  { text: "Cicilan" },
]

const customerLinks = [
  { text: "Help & contact us" },
  { text: "Return" },
  { text: "Online stores" },
  { text: "Terms & condition" },
]
</script>

<style scoped>
.footer {
  background-color: #f5f5f5;
}
</style>
