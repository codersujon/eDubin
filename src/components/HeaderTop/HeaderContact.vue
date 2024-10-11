<script setup>
  // Contact Object
  const contact = {
    address: "127/5 Mark street, New york",
    email: "info@yourmail.com"
  }
</script>

<template>
  <div class="header-contact text-lg-left text-center">
    <ul>
      <li>
        <img src="../../assets/images/all-icon/map.png" alt="icon">
        <span>{{ contact.address }}</span>
      </li>
      <li>
        <img src="../../assets/images/all-icon/email.png" alt="icon">
        <span>{{ contact.email }}</span>
      </li>
    </ul>
  </div>
</template>
