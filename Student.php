<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class student extends Authenticatable {
  
 use HasFactory, Notifiable;

    protected $fillable = ['first_name', 'last_name', 'email', 'password', 'phone', 'group_id', 'skills'];

    public function group() {
        return $this->belongsTo(Group::class);
    }

    public function applications() {
        return $this->hasMany(Application::class);
    }

    public function messages() {
        return $this->hasMany(Message::class);
    }

    public function notifications() {
        return $this->hasMany(Notification::class);
    }
}
